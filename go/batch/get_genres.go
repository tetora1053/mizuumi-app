package main

import (
	"fmt"
	"log"
	"github.com/t-tiger/gorm-bulk-insert"
	"net/url"
	"net/http"
	"github.com/BurntSushi/toml"
	"io/ioutil"
	"encoding/json"
	"../utils/dao"
)

type Genre struct {
	Id int64
	Name string
}

type Genres struct {
	Genres []Genre
}

type Config struct {
	API APIConfig
}

type APIConfig struct {
	Api_key string `toml: "api_key"`
}

func main() {
	u := "https://api.themoviedb.org/3/genre/movie/list"
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

	var g Genres
	json.Unmarshal([]byte(b), &g)

	// dbに接続して新規レコード作成
	db := dao.Connect()
	defer db.Close()

	s := make([]interface{}, len(g.Genres))
	for i, v := range g.Genres {
		s[i] = v
	}
	fmt.Printf("%+v", s)

	err = gormbulk.BulkInsert(db, s, 3000)
	if err != nil {
		log.Fatal(err)
	}
}

