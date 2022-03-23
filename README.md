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

# Dessign Patterns

### Wich patterns does Nest.JS use?
- `Proxy` dessign pattern as `guards`. Guards add some process before passing to the controller's code, but without changing its funcionality.
- `Decorator` dessign pattern as `decorators` in "everything".
- `Strategy` in the way that controllers work.
- `Template` in the architecture of nestJS
- 
### How to implement dependency injection in typescript:
Dependency injection is when an object depends on another object's method/attribute/propierty. Said so, the easy example of this in typescript is a function object that depends on an object that has a specific method:
``` ts
//Interface for a class that should have a void method named sayHello
interface IGreeter {
	sayHello(): void;
}

//Class that has sayHello method
class Greeter implements IGreeter {
	sayHello() {
		console.log("Hello World!")
	}
}
// Here, greetings has a dependency on a Greeter object
function greetings (greeter: Greeter) { 
	greeter.sayHello()
}
const greeter1 = new Greeter();
greetings(greeter1); //`Hello World!`
```
Dependency injection is also present in the way modules work in NestJS, and of course, in the way ORMs work.

### Which patterns can be used on my application?
- `Adapter` pattern, for the creation of INews based on different news from NYT, GNews and The Guardian.
- `Chain of Responsibility`, like an added functionality for the above. Every time that a new from any of the sources needs to be adapted to INew type, the chain will handle it.

### Antipaterns:
Antipattern is a bad practice at software development. Is the opposite of dessign patterns. It frecuently happens because of lack of knowledge or experience. In general, an antipattern is a common, but ineffective, response to a problem. 
In cases, an antipattern is a dessign pattern bad implemented. \
Antipatterns in this project:
- Copy paste code in news controller and service for handling an error with an empty query parameter (corrected).
- Boat anchor as root endpoint service and controller in the previous version of the project (corrected).
