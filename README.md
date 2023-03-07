# DRINKS SERVICE API

## Install

    npm install

## Run the app

    npm start

## Run the tests

    npm test

## Possible Requests:

### Request

`GET /`

### Response

"Welcome to the Drinks API!"

### Request

`GET /coffeelover`

### Response

"I like coffee!"

### Request

`GET /coffee`

### Response (get "Latte" by default)

    `{
      "drinkType": "Coffee",
      "name": "Latte"
    }`

### Request with parameter

`GET /coffee/?coffeeName=mocha`

### Response

`{
    "drinkType": "Coffee",
    "name": "mocha"
  }`

#### Request with parameter

`GET /tea/?teaName=Black`

#### Response

`{
    "drinkType": "Tea",
    "name": "Black"
  }`

#### Request with parameter

`GET /tea`

#### Response

`{
    "drinkType": "Tea",
    "name": "Green"
  }`
