# AWS-Project-FLMP

## Docker

```sh
docker compose -f "app/docker-compose.yml" up -d --build

docker run -p 8080:8080 -p 50000:50000 --restart=on-failure jenkins/jenkins:2.430-jdk21
```
