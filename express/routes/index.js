var express = require('express');
var cors = require('cors');
var app = express();

var router = express.Router();
app.use(cors({
  origin: 'localhost:5000'
}));

var corsOptions = {
  origin: 'localhost:5000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const fs = require('fs');

const DATA = './json/all.json';

// fs.readFile(DATA, (err, data) => {  
//     if (err) throw err;
//     let student = JSON.parse(data);
//     console.log(student);
// });

const TYPE = 'utf8';

const cache = null;

const read = () => {
  let currentData = fs.readFileSync(DATA, TYPE);
  if (currentData === '') {
    currentData = '[]';
  }
  return JSON.parse(currentData);
};

// console.log('This is after the read call');  



app.use(function(req, res, next) {
  // Instead of "*" you should enable only specific origins
  res.header('Access-Control-Allow-Origin', '*');
  // Supported HTTP verbs
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  // Other custom headers
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

/* GET home page. */
app.get('/', function(req, res, next) {
  res.status(200).json(read() );
});

module.exports = app;
