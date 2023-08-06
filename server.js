// Disha - Real Time Chat Application Server
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const port = 4000;

app.listen(port, () => {
    console.log("Server is running at port " + port);
});
