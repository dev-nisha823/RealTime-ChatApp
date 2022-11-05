// Node server which will handle socket io connections

const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
    cors: {
        origin: '*',
    }
});

const users = {};

// whenever there is a connection, execute this arrow function socket
io.on('connection', socket => {

    // if any new user joins, let other users connected to the server know!
    socket.on('new-user-joined',name => {
        console.log("New user has joined:",name);
        users[socket.id] = name;
        // line no.13 will tell every user that a particular user has joined the chat
        socket.broadcast.emit('user-joined',name);
    });

    // if someone sends a message , broadcast it to the other people 
    socket.on('send',message => {
        socket.broadcast.emit('receive',{message: message, name: users[socket.id]})
    });

    //whenever user will leave from the chat,let others know
    socket.on('disconnect',message => {
        socket.broadcast.emit('left', users[socket.id])
        delete users[socket.id];
    });
});


httpServer.listen(8000);
