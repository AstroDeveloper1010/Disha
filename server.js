// Disha - Real Time Chat Application Server
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const pathfile = path.join(__dirname, 'public');
app.get('/', (req, res) => {
    res.sendFile(`${pathfile}/index.html`)
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
