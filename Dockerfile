FROM node:lts-buster
RUN apt update -y 
RUN apt upgrade -y
RUN apt install nginx curl -y