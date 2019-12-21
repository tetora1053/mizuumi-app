package main

import (
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
	"./secret"
)

type Movie struct {
	Title string
	Release_date string
}

func gormConnect() *gorm.DB {
	a := secret.GetAuthData()

	CONNECT := a.USER + ":" + a.PASS + "@" + a.PROTOCOL + "/" + a.DBNAME
	// DBに接続
	db, err := gorm.Open(a.DBMS, CONNECT)
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
	v.Set("api_key", secret.TMDB_API_KEY)
	v.Add("language", "ja")
	res, err := http.Get(u + "?" + v.Encode())
	defer res.Body.Close()
	if err != nil {
		log.Fatal(err)
	}
	b, err := ioutil.ReadAll(res.Body)
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
	db.Create(&m)
}

