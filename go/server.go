package main

import (
    "net/http"
    "github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

type User struct {
    Name  string `json:"name"`
    Email string `json:"email"`
}

func main() {
    e := echo.New()
	e.Use(middleware.CORS())

    e.POST("/users", saveUser)

    e.Logger.Fatal(e.Start(":1323"))
}

func saveUser(c echo.Context) error {
    u := new(User)
    if err := c.Bind(u); err != nil {
        return err
    }
    return c.JSON(http.StatusOK, u)
}
