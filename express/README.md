# Create a simple express server
This repository is used to create a basic express server.

## Setup
- Run commands to start express server:
```
$ cd list_detail_view_app
list_detail_view_app $ cd express
list_detail_view_app $ yarn install
list_detail_view_app $ yarn serve
```
- Go to localhost:5001/items and verify JSON data is outputted.


## setup from scratch
- In terminal, install package json with yarn
  - cd express
  - yarn init
- Install espress with command:
  - yarn add express
- Run express with command:
  - express
- Type y when ask destination is not empty, continue? 
- You should have updated packages in your package.json such as morgan and debug.
- Now run yarn to link dependencies with command:
  - yarn install
- Now run express with command:
 - express
- See if the output shows up http://localhost:4001/ shown in "expresspage.png" image with words 
  - "Express" 
  - "You setup Express correctly!" 
- If so, the setup is done correctly.

## resources
- [espress](https://expressjs.com/)

