# AWS-Project-FLMP

## Docker

```sh
docker compose -f "app/docker-compose.yml" up -d --build
```


```
docker image build -t ansible:2.16 . 
docker container run --rm ansible:2.16 ansible-playbook -i inventory.ini playbook.yml

```