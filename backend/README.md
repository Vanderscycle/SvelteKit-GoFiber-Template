# Backend

## Gofiber/fiber
* [Documentation](https://github.com/gofiber/fiber)

### Launch the backend
```bash
# to launch the db
go run main.go
# to launch the db
podman-compose up -d # use docker but only if you must
```
## env file

example env file

```bash
HOST=localhost
DB_USER=gorm
DB_PASSWORD=postgres
DB_NAME=db
PORT=5433
LISTEN_ADDR=localhost:8080
REDIS_ADDR=localhost:6379
```
## DB
