# TILER Observer service

## Project overview 
TILER for Twitch scrutinizer is a [Erwan Haquet](https://github.com/erwan-haquet) side-project.   
Goals are to **learn a bunch of new cool tools** like Symfony 4, Mercure, RabbitMQ, ReactJS, ElasticSearch... **use new concepts** like CQRS / Event sourcing and **enjoy coding** :)   
If you want to learn more, check out the [main repository](https://github.com/erwan-haquet/tiler-box).

## Observer service
A javascript twitch bot which is responsible for listening twitch chats and redirect event as formatted commands to [Orchestrator service](https://github.com/erwan-haquet/tiler-orchestrator).

## Installation

#### Requirements

- Install [Node.js](https://nodejs.org/en/download/)
- Install [NPM](https://www.npmjs.com/get-npm)

#### Get started

##### Option 1

Go to the main [main repository](https://github.com/erwan-haquet/tiler-box), and use the docker infrastructure with all services included.

##### Option 2

1) Clone the repository

> git clone git@github.com:erwan-haquet/tiler-orchestrator.git
> cd tiler-orchestrator

2) Copy the `.env.local` to `.env` and fill it with your informations.

3) Install the dependencies & start the bot

 > npm install  
 > npm start
 
5) That's it :D

## Documentation
TODO 

