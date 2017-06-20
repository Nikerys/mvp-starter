var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var books = require('../database-mysql');
var books = require('../database-mongo');
var allBooks = books.selectAll;
var bookModel = books.book;


var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.post('/', (req, res) => {
  var body = [];
  req.on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    var newBook = new bookModel({name: body});
    newBook.save((err) => {
      if(err) { console.log(err); }
    });
    res.end(body);
  });
});




app.get('/books', (req, res) => {
  allBooks(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      console.log('HEEEEEELO', bookModel);
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

