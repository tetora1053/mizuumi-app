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
	"bufio"
	"image"
	_ "image/gif"
	"image/jpeg"
	_ "image/png"
	"golang.org/x/image/draw"
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
	e.GET("/movies/:id/thumbnail", getThumbnailByMovieId)
	e.GET("/movies", getMovies)
	e.GET("/users/:userId/movies", getMoviesByUserId)
	e.GET("/genres/:genreId/movies", getMoviesByGenreId)
	e.GET("/genres", getGenres)

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

	return c.Stream(http.StatusOK, "image/jpeg", r)
}

func getThumbnailByMovieId(c echo.Context) error {
	movieId, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		log.Fatal(err)
	}

	db := dao.Connect()
	defer db.Close()

	mi := MovieImage{}
	db.Where("movie_id = ?", movieId).First(&mi)

	imgSrc, _, err := image.Decode(bytes.NewReader(mi.Data))
	if err != nil {
		log.Fatal(err)
	}

	catmullRom := draw.CatmullRom
	rectDst := image.Rect(0, 0, 200, 200)
	imgDst := image.NewRGBA(rectDst)
	catmullRom.Scale(imgDst, rectDst, imgSrc, imgSrc.Bounds(), draw.Over, nil)

	var b bytes.Buffer
	w := bufio.NewWriter(&b)
	jpeg.Encode(w, imgDst, nil)

	r := bytes.NewReader(b.Bytes())

	return c.Stream(http.StatusOK, "image/jpeg", r)
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

func getGenres(c echo.Context) error {
	db := dao.Connect()
	defer db.Close()

	// genresテーブルからレコード取得
	gs := []Genre{}
	db.Find(&gs)

	return c.JSON(http.StatusOK, gs)
}

