package db

import (
	"backend/blogPost"
	"backend/database"

	"github.com/gofiber/fiber/v2"
)

func DropDB(c *fiber.Ctx) error {
	db := database.DBConn
	//drop db
	/// can always call in an array
	db.Migrator().DropTable(&blogPost.BlogPost{})
	//recreate db
	db.AutoMigrate(&blogPost.BlogPost{})

	msg := []byte("Dropped table")
	return c.Send(msg)

}
