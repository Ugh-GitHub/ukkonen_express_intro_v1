// Require express - gives us a function
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express by calling the function 
// returned above - gives us an object
const app = express();
const port = 5000;

const quotesData = require ('./modules/quotes.js');

// express static file serving - public is the folder name
app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended: true}));

let index = 0;

app.get('/quotes', (req, res) => {
    console.log('hi from get request');
    res.send(quotesData);
});

app.get('/randomQuote', (req, res) => {
    let randomNumber = getRandomInt(quotesData.length);
    res.send(quotesData[randomNumber]);
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

app.post('/quotes', (req, res) => {
    console.log('hello from post', req.body);
    quotesData.push(req.body);
    console.log(quotesData);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log("Up and running on port: ", port);
});
