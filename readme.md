
# RandomMessages App
## 📚 About project

RandomMessages is a Mobile solution developed with React Native, wich communicates with a simple nodejs API.

The API was developed using Serverless framework, wich is hosted as a lambda function on AWS.

  ## 🌐  Technologies

-   [React Native](https://reactnative.dev/)
-   [Yarn](https://yarnpkg.com/)
-   [Typescript](https://www.typescriptlang.org)
-   [Jest](https://jestjs.io)
-   [API Gateway](https://aws.amazon.com/pt/api-gateway/)
-   [Serverless](https://www.serverless.com)
-   [NodeJS](https://nodejs.org/en/)

## ✔️ Resources
  
+ [Check Figma's project link](https://www.figma.com/file/HI4AmEWP8lHc7pcjINgtfk/Random-Messages?node-id=2%3A5)

+ [Download the Android version](https://install.appcenter.ms/users/arthur.pasqualon/apps/randommessages/distribution_groups/testers)


## 📱 Features

+ Messages.

![](https://mixed-arthurpasqualon.s3.amazonaws.com/Captura+de+Tela+2021-03-16+a%CC%80s+21.30.52.png)

+ Details.

![](https://mixed-arthurpasqualon.s3.amazonaws.com/RandomMessages-1.png)

+ /messages route that returns all messages

## 🚧 WIP and Tech debts 🚧

### 👷 Backend
+ CRUD for /messages
+ Connect API to MongoDB cluster (WIP)
+ Create error statusCode 
+ Add tests (WIP)

### 👷 Mobile
+ Update android app to not use debug certificate
+ Add other locale options
+ Update App to display some error if the user has some data and api returns error

