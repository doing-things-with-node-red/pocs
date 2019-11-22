# PoC Node-RED: Azure Passport
Azure Active Directory Authentication using Node-RED and Passportjs.

## Requirements
In order for the build to run correctly, a few tools will need to be installed on your
development machine:

* Docker
* Docker-compose

You need a Azure AD instance.

## Getting started
Compose supports declaring default environment variables in an environment file named .env placed in the folder where the docker-compose command is executed (current working directory).

Inside .env file you can define the value of these variables:

* CLIENT_ID=xxxxxx-xxxxxx-xxxxxx-xxxxxx-xxxxxx
* CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
* TENANT=xxxxxx-xxxxxx-xxxxxx-xxxxxx-xxxxxx

## Run the scenario
-----------------
```
docker-compose up --build
```

[Go to the Node-RED](http://localhost:8080)
[![Node-RED: Azure Login](https://i.imgur.com/FhUL8RW.png)](https://i.imgur.com/FhUL8RW.png)