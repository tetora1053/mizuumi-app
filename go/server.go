package main

import (
    "net/http"
    "github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

type Movie struct {
    Name  string `json:"name"`
    Released int `json:"released"`
}

func main() {
    e := echo.New()
	e.Use(middleware.CORS())

    e.POST("/movies", getMovies)

    e.Logger.Fatal(e.Start(":1323"))
}

func getMovies(c echo.Context) error {
    u := new(Movie)
    if err := c.Bind(u); err != nil {
        return err
    }
    return c.JSON(http.StatusOK, u)
}
