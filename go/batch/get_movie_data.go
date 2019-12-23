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
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
)

type Config struct {
	DB DBConfig
	API APIConfig
}

type DBConfig struct {
	Dbms string `toml: "dbms"`
	User string `toml: "user"`
	Password string `toml: "password"`
	Protocol string `toml: "protocol"`
	Dbname string `toml: "dbname"`
}

type APIConfig struct {
	Api_key string `toml: "api_key"`
}

type Movie struct {
	Tmdb_id int64 `json:"id"`
	Title string
	Release_date string
}

func gormConnect() *gorm.DB {

	var c Config
	_, err := toml.DecodeFile("../secret/config.toml", &c)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(c.DB.User)

	connect := c.DB.User + ":" + c.DB.Password+ "@" + c.DB.Protocol + "/" + c.DB.Dbname
	// DBに接続
	db, err := gorm.Open(c.DB.Dbms, connect)
	if err != nil {
		panic(err.Error())
	}
	return db
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
	_, err := toml.DecodeFile("../secret/config.toml", &c)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(c.API.Api_key)
	v.Set("api_key", c.API.Api_key)
	v.Add("language", "ja")
	res, err := http.Get(u + "?" + v.Encode())
	defer res.Body.Close()
	if err != nil {
		log.Fatal(err)
	}
	b, err := ioutil.ReadAll(res.Body)
	fmt.Println(string(b))
	if err != nil {
		log.Fatal(err)
	}

	// 取得したjsonデータをMovie構造体にマップ
	var m Movie
	json.Unmarshal([]byte(b), &m)
	fmt.Printf("%+v", m)

	// dbに接続して新規レコード作成
	db := gormConnect()
	defer db.Close()
	db.FirstOrCreate(&m, Movie{Tmdb_id: m.Tmdb_id})
}

