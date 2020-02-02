package dao

import (
	"log"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"github.com/BurntSushi/toml"
)

type Config struct {
	DB DBConfig
}

type DBConfig struct {
	Dbms string `toml: "dbms"`
	User string `toml: "user"`
	Password string `toml: "password"`
	Protocol string `toml: "protocol"`
	Dbname string `toml: "dbname"`
}

func Connect() *gorm.DB {

	var c Config
	_, err := toml.DecodeFile("../secret/config.toml", &c)
	if err != nil {
		log.Fatal(err)
	}

	connect := c.DB.User + ":" + c.DB.Password+ "@" + c.DB.Protocol + "/" + c.DB.Dbname
	// DBに接続
	db, err := gorm.Open(c.DB.Dbms, connect)
	if err != nil {
		log.Fatal(err)
	}
	return db
}

