<h1 align="center">News Aggregator Api</h1>

![NPM](https://img.shields.io/badge/NPM-8.3.1-389AD5?labelColor=31C4F3&style=for-the-badge) ![NODE](https://img.shields.io/badge/NODE-16.14.0-8FC965?labelColor=5D9741&style=for-the-badge) ![NESTJS](https://img.shields.io/badge/NESTJS-8.2.1-389AD5?labelColor=31C4F3&style=for-the-badge)

## Description

<p >API that handle searchs requests from New York Times and The Guardian APIs. Returns a list with news that contains the word provided by the client.</p>

## Initial configuration

```bash
$ export PORT = <port_you_want_use>
$ export NYT_API_KEY = <your_NYT_api_key>
$ export GUARDIAN_API_KEY = <your_TheGuardian_api_key>
```
### Notes:
If no port is provided, 3000 will be the default.
If no Api keys are provided, a test key will be used. 
## How to run

```bash
$ npm run start
```
## How to use
On your browser, postman or any application to make HTTP request, do:
>GET http://localhost:3000/news/?search=kitty

If you want to get results only by one of the apis, then use the '`newspaper`' query parameter:
>GET http://localhost:3000/news/?search=kitty&newspaper=guardian

The accepted values for '`newspaper`' query parameter are '`guardian`' and '`nyt`'.