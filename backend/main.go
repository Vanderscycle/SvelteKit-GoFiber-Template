package main

//TODO: when hosted on github I could set a var to link to it
// TODO: add a .env file for the db keywords
import (
	"backend/blogPost"
	"backend/database"
	"backend/db"
	// "context"
	"fmt"
	"log"
	"os"

	// "github.com/go-redis/redis/v8"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func helloWorld(c *fiber.Ctx) error {
	msg := []byte("Hello world")
	return c.Send(msg)
}

func setupRoutes(app *fiber.App) {
	//blogPoint endpoints
	apiblogPost := app.Group("/api/blogPost")
	apiblogPost.Get("", blogPost.GetPosts)
	apiblogPost.Get(":id", blogPost.GetPost)
	apiblogPost.Post("", blogPost.NewPost)
	apiblogPost.Delete(":id", blogPost.DeletePost)
	//dev endpoints}
	apiDB := app.Group("/api/db")
	apiDB.Delete("", db.DropDB)
}

// func initRedisDB() {
// 	//https://github.com/go-redis/redis
// 	var ctx = context.Background()
// 	rdb := redis.NewClient(&redis.Options{
// 		Addr:     "localhost:6379",
// 		Password: "", // no password set
// 		DB:       0,  // use default DB
// 	})

// 	err := rdb.Set(ctx, "key", "value", 0).Err()
// 	if err != nil {
// 		panic(err)
// 	}

// 	val, err := rdb.Get(ctx, "key").Result()
// 	if err != nil {
// 		panic(err)
// 	}
// 	fmt.Println("key", val)

// 	val2, err := rdb.Get(ctx, "key2").Result()
// 	if err == redis.Nil {
// 		fmt.Println("key2 does not exist")
// 	} else if err != nil {
// 		panic(err)
// 	} else {
// 		fmt.Println("key2", val2)
// 	}
// }

func initPostgresDatabase() {
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable TimeZone=Asia/Shanghai", os.Getenv("HOST"), os.Getenv("DB_USER"), os.Getenv("DB_PASSWORD"), os.Getenv("DB_NAME"), os.Getenv("PORT"))
	var err error
	database.DBConn, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("Failed to connect to database")
	}
	fmt.Println("Database connection successfully")
	//automigrate
	database.DBConn.AutoMigrate(&blogPost.BlogPost{})
	fmt.Println("Database Migrated")
}

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	const port string = ":5000"
	app := fiber.New()
	app.Use(cors.New())
	initPostgresDatabase()
	// initRedisDB()
	// defer database.DBConn
	setupRoutes(app)
	// app.Get("/", helloWorld)
	app.Listen(port)
}
