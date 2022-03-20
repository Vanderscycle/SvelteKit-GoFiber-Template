package blogPost

import (
	"backend/database"
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

type BlogPost struct {
	gorm.Model
	Title    string `json:"title"`
	Author   string `json:"author`
	MainText string `json:"mainText"`
}

func GetPosts(c *fiber.Ctx) error {
	db := database.DBConn
	var blogPost []BlogPost
	db.Find(&blogPost)
	return c.JSON(blogPost)
}

func GetPost(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.DBConn
	var blogPost BlogPost
	db.Find(&blogPost, id)
	return c.JSON(blogPost)
}

func NewPost(c *fiber.Ctx) error {
	db := database.DBConn
	blogPost := new(BlogPost)
	if err := c.BodyParser(blogPost); err != nil {
		return c.Status(503).Send([]byte("error"))
	}
	db.Create(&blogPost)
	return c.JSON(blogPost)
}

func DeletePost(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.DBConn
	var blogPost BlogPost
	db.First(&blogPost, id)
	if blogPost.Title == "" {
		errMsg := []byte("No record matches the id")
		return c.Status(500).Send(errMsg)
	}
	db.Delete(&blogPost) // TODO: how to concat to byte
	msg := []byte("post deleted successfully")
	return c.Send(msg)
}
