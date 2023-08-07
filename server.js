// Disha - Real Time Chat Application Server
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const pathfile = path.join(__dirname, 'public');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(`${pathfile}/index.html`);
});

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('message', (data) => {
        // Handle incoming messages and broadcast to all connected clients
        io.emit('message', data); // Broadcast the message to all clients
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
