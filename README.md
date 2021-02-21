# petfinder-int20h
Find lost pets using this service

## Demo
[Live version of website](https://petfinder.site/)

![Main page](https://i.imgur.com/xTLmGY6.png)


## Features
- Single Page Application
- Cool design for Dark theme

## Technology stack
- Python + Flask + Peewee
- pyTelegramBotAPI
- React.js + Semantic Ui
- Docker + Docker Compose
- Nginx
- Redis

## How to run

### Prerequisite
1. Install [Docker](https://docs.docker.com/get-docker/)
2. Install [Docker-compose](https://docs.docker.com/compose/install/)
3. Optional: install SSL certificate for your server using [certbot](https://certbot.eff.org/) + change `server_name` to your domain name

If you omit step 3 please remove all files inside `nginx_service/block_configs` and copy `petfinder-nossl.conf` there

### Download & Run
```sh
git clone https://github.com/gurland/petfinder-int20h.git
cd petfinder-int20h
docker-compose up --build
```
## References
[Trello board](https://trello.com/b/iWiqh0U7/main-int20h)

## Contributors

- [Stanislav Bobokalo](https://github.com/gurland/)

- [Oleksandr Semeniuk](https://github.com/dvoyakiy)

- [Roman Matuk](https://github.com/r666666)

- [Kostiantyn Pasalskyi](https://github.com/kiririnou)


## License
[GPL-3.0 License](https://github.com/gurland/goods-aggregator/blob/main/LICENSE)