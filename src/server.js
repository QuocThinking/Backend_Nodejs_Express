

//import express from 'express'; // error
const express = require('express');
const path = require('path');
const hostname = process.env.hostname;
require('dotenv').config()

console.log('check env ', process.env);

const app = express(); // => app express
const port = process.env.port || 8888;

// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// khai bao round
app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.get('/abc', (req, res) => {
  res.send('Hello World! Le Quoc');
})

app.get('/hoiQuoc', (req, res) => {
  // res.send('<h1>Quo cdep trai </h1>')

  res.render('sample.ejs');
})

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`);
})
