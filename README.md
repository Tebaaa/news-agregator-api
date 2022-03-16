<h1 align="center">News Aggregator Api</h1>

![NPM](https://img.shields.io/badge/NPM-8.3.1-389AD5?labelColor=31C4F3&style=for-the-badge) ![NODE](https://img.shields.io/badge/NODE-16.14.0-8FC965?labelColor=5D9741&style=for-the-badge) ![POSTGRESQL](https://img.shields.io/badge/POSTGRESQL-12.9-8FC965?labelColor=5D9741&style=for-the-badge) ![NESTJS](https://img.shields.io/badge/NESTJS-8.2.1-389AD5?labelColor=31C4F3&style=for-the-badge)

## Description

<p >API that handle searchs requests from New York Times and The Guardian APIs. Returns a list with news that contains the word provided by the client.</p>

## Initial configuration

```bash
$ export PORT = <port_you_want_use>
$ export NYT_API_KEY = <your_NYT_api_key>
$ export GUARDIAN_API_KEY = <your_TheGuardian_api_key>
$ export G_NEWS_API_KEY = <your_G_NEWS_api_key>
```
### Notes:
If no port is provided, 3000 will be the default.
If no Api keys are provided, a test key will be used. 
### Database configuration:
```bash
$ export DB_PORT = <database_port>
$ export DB_USERNAME = <database_username>
$ export DB_PASSWORD = <database_password>
$ export DB_NAME = <database_name>
```
## How to run

```bash
$ npm run start
```
## How to use
### Login:
On your browser, postman or any application to make HTTP request, do:
>POST http://localhost:3000/auth/login
>>{\
"username": \<your username\>,\
"password": \<your password\>\
}

You'll get an access token like the following:
>{\
	"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlYmFVbm8iLCJzdWIiOjEsImlhdCI6MTY0NzQwMjcxMSwiZXhwIjoxNjQ3NDAzMzExfQ.0hjET0LZ7XhtZH-a2uCRzcrC_Yg9wZL3oueIrRxG3eQ"\
}

### Get news:
In the header, provide your access token:
>"Authorization": "Bearer \<access_token>"

>GET http://localhost:3000/news/?search=kitty

If you want to get results only by one of the apis, use the '`newspaper`' query parameter:
>GET http://localhost:3000/news/?search=kitty&newspaper=guardian

The accepted values for '`newspaper`' query parameter are '`guardian`', '`nyt`' and '`gnews`'.

To save news to your account, providing your access token in header, do as follows:

>POST http://localhost:3000/users/\<your_ID>/news
>>{\
	"url_new": \<url_to_save>\
}

Get your saved news:
>GET http://localhost:3000/users/\<your_id>/news

## Users CRUD:
Create user:
>POST http://localhost:3000/users/
>>{\
	"username": "newUser",\
	"password": "newPassword"\
}

Get all users:
>GET http://localhost:3000/users/

Get user by ID:
>GET http://localhost:3000/users/\<user_id>

Update user: 
>PATCH http://localhost:3000/users/\<user_id>
>>{\
	"username": "NewUsername"\
}

Delete user by id:
>DELETE http://localhost:3000/users/\<user_id>