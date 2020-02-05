package main

import (
	"fmt"
	"log"
	"net/http"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"strconv"
	"./utils/dao"
	"bytes"
)

type Movie struct {
	Id int64 `json:"id"`
	Title  string `json:"title"`
	Overview  string `json:"overview"`
	Release_date string `json:"releaseDate"`
	Genres []Genre `json:"genres"`
}

type MovieImage struct {
	Movie_id int64
	Data []byte
}

type Genre struct {
	Id int64 `json:"id"`
	Name string `json:"name"`
}

type MovieGenre struct {
	Movie_id int64
	Genre_id int64
}

type UserMovie struct {
	Movie_id int64 `json:"movie_id"`
}

func main() {
	e := echo.New()
	e.Use(middleware.CORS())

	e.GET("/movies/:id", getMovieById)
	e.GET("/movies/:id/image", getImageByMovieId)
	e.GET("/movies", getMovies)
	e.GET("/users/:userId/movies", getMoviesByUserId)
	e.GET("/genres/:genreId/movies", getMoviesByGenreId)


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

	mgs := []MovieGenre{}
	db.Where("movie_id = ?", m.Id).Find(&mgs)

	for _, v := range mgs {
		g := Genre{}
		db.First(&g, v.Genre_id)
		m.Genres = append(m.Genres, g)
	}
	fmt.Println(m)

	return c.JSON(http.StatusOK, m)
}

func getImageByMovieId(c echo.Context) error {
	movieId, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		log.Fatal(err)
	}

	db := dao.Connect()
	defer db.Close()

	mi := MovieImage{}
	db.Where("movie_id = ?", movieId).First(&mi)

	r := bytes.NewReader(mi.Data)

	return c.Stream(http.StatusOK, "image/png", r)
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

func getMoviesByGenreId(c echo.Context) error {
	genreId, err := strconv.Atoi(c.Param("genreId"))
	if err != nil {
		log.Fatal(err)
	}

	db := dao.Connect()
	defer db.Close()

	// movie_genreテーブルからレコード取得
	mgs := []MovieGenre{}
	db.Where("genre_id = ?", genreId).Find(&mgs)

	// 取得したレコードからmovie_idのスライスを作成
	var movieIds []int64
	for _, s := range mgs {
		movieIds = append(movieIds, s.Movie_id)
	}

	// Movieテーブルからレコード取得
	ms := []Movie{}
	db.Where(movieIds).Find(&ms)
	return c.JSON(http.StatusOK, ms)
}

