package main

import (
	"fmt"
	"log"
	"net/http"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"strconv"
	"./utils/dao"
)

type Movie struct {
	Id int64 `json:"id"`
	Title  string `json:"title"`
	Overview  string `json:"overview"`
	Release_date string `json:"releaseDate"`
}

type UserMovie struct {
	Movie_id int64 `json:"movie_id"`
}

func main() {
	e := echo.New()
	e.Use(middleware.CORS())

	e.GET("/movies/:id", getMovieById)
	e.GET("/movies", getMovies)
	e.GET("/users/:userId/movies", getMoviesByUserId)

	e.Logger.Fatal(e.Start(":1323"))
}

func getMovieById(c echo.Context) error {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		log.Fatal(err)
	}

	db := dao.Connect()
	defer db.Close()

	m := Movie{}
	db.First(&m, id)
	fmt.Println(m)

	return c.JSON(http.StatusOK, m)
}

func getMovies(c echo.Context) error {
	db := dao.Connect()
	defer db.Close()

	ms := []Movie{}
	db.Find(&ms)

	return c.JSON(http.StatusOK, ms)
}

func getMoviesByUserId(c echo.Context) error {
	userId, err := strconv.Atoi(c.Param("userId"))
	if err != nil {
		log.Fatal(err)
	}

	db := dao.Connect()
	defer db.Close()

	// user_moviesテーブルからレコード取得
	ums := []UserMovie{}
	db.Where("user_id = ? AND status = ?", userId, "y").Find(&ums)

	// 取得したレコードからmovie_idのスライスを作成
	var movieIds []int64
	for _, s := range ums {
		movieIds = append(movieIds, s.Movie_id)
	}

	// Movieテーブルからレコード取得
	ms := []Movie{}
	db.Where(movieIds).Find(&ms)
	return c.JSON(http.StatusOK, ms)
}

