const express = require('express');
const ejs = require('ejs');
const path = require('path');


const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/index.ejs'));
  res.render('index');
});

app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/about.ejs'));
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/add_post.ejs'));
  res.render('add_post');
});

app.get('/post', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/post.ejs'));
  res.render('post');
});
app.get('/index', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/index.ejs'));
  res.render('index');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} ile başlatıldı.`);
});
