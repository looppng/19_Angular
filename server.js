const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config().parsed
const bodyParser = require('body-parser')


const mysql = require('mysql');
var connection = mysql.createConnection({
  host     : dotenv.HOST,
  user     : dotenv.USER,
  password : dotenv.PASS,
  database : dotenv.NAME,
  port     : dotenv.PORT
});


connection.connect();
app.use(cors());

app.use(bodyParser.json())

app.get('/api/books', (req, res) => {
  connection.query('SELECT * FROM Books', function (error, results, fields) {
    res.json(results)

    if (error) throw error;
  });
});

app.get('/api/books/:id', (req, res) => {
  const bookId = req.params.id

  connection.query('SELECT * FROM Books WHERE id = ?', [bookId], function (error, results, fields) {
    res.json(results[0])

    if (error) throw error;
  });
});

app.delete('/api/books/:id', ( req, res ) => {
  const bookId = req.params.id

  connection.query('DELETE FROM books WHERE id = ?', [bookId], function (error, results, fields) {
    if (error) throw error;

    return res.json({ message: "Book deleted successfully"})
  })
});

app.post('/api/books', (req, res) => {

  const name = req.body.name
  const author = req.body.author
  const image = req.body.image


  connection.query('INSERT INTO books SET ?', {name: name, author: author, image: image}, function (error, results, fields) {
    if (error) throw error;
    res.json({message: "Book added successfully!"})
  });
})






app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
