const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/css'));
console.log(__dirname);

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/CV.html'));
});

app.listen(port);
console.log('Server started at http://localhost:' + port);