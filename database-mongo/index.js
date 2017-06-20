var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var BookSchema = mongoose.Schema({
  name: String,
});

var Book = mongoose.model('Book', BookSchema);

var selectAll = function(callback) {
  Book.find({}, function(err, books) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, books);
    }
  });
};

module.exports.book = Book;
module.exports.selectAll = selectAll;