# SvelteKit/Gofiber Template


## Frontend

## Backend


## DB

## API-Postman
You can import the api calls from *.postman_*.json to use as a api template.

## using podman (from Dockerfile)
I personally prefer podman/buildah/podman-compose over Docker

To build an image (e.g. backend)
```bash
podman build ./backend -t go-fiber:latest
# you can use no cache just like in docker --no-cache
```

To confirm that it loaded correctly
```bash
podman images | rg "go-fiber"
```
To run the image as a container
```bash
podman run -P -d go-fiber:latest
```
To view the container
```bash
podman container list -a
```
Should you run into issues (the container exited)
```bash
podman logs -t {name}
```

To enter a running container
```bash
podman exec -it <Container ID> /bin/bash
```

---

# Notes
Pr welcome
