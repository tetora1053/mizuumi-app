package main

import (
	_ "fmt"
	"net/http"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	"./secret"
	"strconv"
)

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

type Movie struct {
	Id int `json:"id"`
	Title  string `json:"title"`
	Release_date string `json:"release_date"`
}

func main() {
	e := echo.New()
	e.Use(middleware.CORS())

	e.GET("/movies/:id", getMovieById)
	e.GET("/movies", getMovies)

	e.Logger.Fatal(e.Start(":1323"))
}

func getMovieById(c echo.Context) error {
	var id int
	id, _ = strconv.Atoi(c.Param("id"))

	db := gormConnect()
	defer db.Close()

	m := Movie{}
	db.First(&m, id)

	return c.JSON(http.StatusOK, m)
}

func getMovies(c echo.Context) error {
	db := gormConnect()
	defer db.Close()

	ms := []Movie{}
	db.Find(&ms)

	return c.JSON(http.StatusOK, ms)
}

