# LoggerApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## About

Logger app offers  a possibility to make API request and preview, save, edit and delete data fetched from API. In this case API is deployed as AWS Lambda API which will for every request return log fo that request like in example 

{"host":"iogcsgf8ti.execute-api.eu-west-1.amazonaws.com","protocol":"https","path":"/dev/user","method":"GET","params":{"0":"user"},"query":{"id":"1"},"stage":"dev","requestTime":"11/May/2021:13:17:54 +0000","requestTimeEpoch":1620739074147,"clientAdress":"185.50.59.238"}

API Gateway have configured three stages DEV,UAT and QA.

After request is made and response have arrived app will autosave response data as log in LocalStorage.
List of saved logs can be found(saved logs will appear) on left side.
User can open, modify ,update , delete previously saved logs.
