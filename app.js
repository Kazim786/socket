const express = require('express')
const app = express();
let PORT = 3000


//server
const http = require('http').Server(app)

const io = require('socket.io')(http);

app.use(express.static('public'));

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(require('./routes/index'))




io.on('connection', (socket) => {
    
        console.log('User is connected');
        socket.on('chat message', (msg) => {
            io.emit('chat message', msg)
            
        })
        io.emit('chat message', 'hello world')

        
    } )

http.listen(PORT, () => {

    console.log('listening on port 3000')
})