# dicoding-jarkom
#### [nginx](https://github.com/hiage/a387.git)
```sh
docker-compose up -d
docker exec -ti jarkom-labs bash

curl -XGET http://localhost:8000 <-- untuk akses via port nodejs
curl -XGET http://localhost <--untuk akses via nginx reverse proxy
```
#### [Apache2](https://github.com/hiage/a387/tree/master/apache2)

```sh
docker-compose up -d
docker exec -ti jarkom-labs-apache2 bash

curl -XGET http://localhost:8000 <-- untuk akses via port nodejs
curl -XGET http://localhost <--untuk akses via nginx rev
