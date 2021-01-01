#!/bin/bash

docker stop mongodb-dev

docker rm mongodb-dev

docker run -d \
	--name mongodb-dev \
	-p 27888:27017 \
	-e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
	-e MONGO_INITDB_ROOT_PASSWORD=pass \
	mongo:latest
