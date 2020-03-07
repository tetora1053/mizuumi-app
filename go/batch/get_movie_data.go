package main

import (
	"github.com/BurntSushi/toml"
	"fmt"
	"flag"
	"strconv"
	"io/ioutil"
	"log"
	"net/http"
	"net/url"
	"encoding/json"
	"../utils/dao"
)

type Config struct {
	API APIConfig
}

type APIConfig struct {
	Api_key string `toml: "api_key"`
}

type Movie struct {
	Id int64
	Tmdb_id int64 `json:"id"`
	Title string
	Overview string
	Release_date string
	Genres []Genre
}

/*
 * tmdbAPIから取得したmovieデータの中で、moviesテーブルには保存しないが
 * バッチの処理上必要なデータを格納するための構造体  
 */
type MovieTmp struct {
	Poster_path string
}

type MovieImage struct {
	Movie_id int64
	Data []byte
}

type Genre struct {
	Id int64
	Name string
}

type MovieGenre struct {
	Movie_id int64
	Genre_id int64
}

func main() {
	// コマンドライン引数で渡されたidでtmdbAPIからデータ取得
	flag.Parse()
	id := flag.Arg(0)
	if _, err := strconv.Atoi(id); err != nil {
		log.Fatal(err)
	}
	u := "https://api.themoviedb.org/3/movie/" + id
	v := url.Values{}

	var c Config
	_, err := toml.DecodeFile("./secret/config.toml", &c)
	if err != nil {
		log.Fatal(err)
	}
	v.Set("api_key", c.API.Api_key)
	v.Add("language", "ja")
	res, err := http.Get(u + "?" + v.Encode())
	defer res.Body.Close()
	if err != nil {
		log.Fatal(err)
	}
	if res.StatusCode != 200 {
		log.Fatal("StatusCode is not 200 but ", res.StatusCode)
	}
	b, err := ioutil.ReadAll(res.Body)
	if err != nil {
		log.Fatal(err)
	}

	// 取得したjsonデータをMovie構造体にマップ
	var (
		m Movie
		mt MovieTmp
	) 

	json.Unmarshal(b, &m)
	json.Unmarshal(b, &mt)
	fmt.Printf("%+v\n", m)

	// dbに接続して新規レコード作成
	db := dao.Connect()
	defer db.Close()
	db.Where(Movie{Tmdb_id: m.Tmdb_id}).Assign(&m).FirstOrCreate(&m, Movie{Tmdb_id: m.Tmdb_id})

	// movie_genresテーブルにinsert
	mg := make([]MovieGenre, len(m.Genres))
	for i, v := range m.Genres {
		mg[i].Movie_id = m.Id
		mg[i].Genre_id = v.Id
	}
	for i, v := range mg {
		db.Where(MovieGenre{Movie_id: v.Movie_id, Genre_id: v.Genre_id}).Assign(&mg[i]).FirstOrCreate(&mg[i], MovieGenre{Movie_id: v.Movie_id, Genre_id: v.Genre_id})
	}

	// 画像を取得してmovie_imagesテーブルにinsert
	imgUrl := "https://image.tmdb.org/t/p/w500" + mt.Poster_path
	imgRes, err := http.Get(imgUrl)
	defer imgRes.Body.Close()
	if err != nil {
		log.Fatal(err)
	} else if imgRes.StatusCode != 200 {
		log.Fatal("StatusCode is not 200 but ", imgRes.StatusCode)
	}
	img, err := ioutil.ReadAll(imgRes.Body)
	if err != nil {
		log.Fatal(err)
	}
	mb := MovieImage{Movie_id: m.Id, Data: img}
	db.Where(MovieImage{Movie_id: mb.Movie_id}).Assign(&mb).FirstOrCreate(&mb, MovieImage{Movie_id: mb.Movie_id})
}

