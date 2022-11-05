                                                                   # RealTime-ChatApp

# Introduction of the Project:-
It is a Social media App just like the Whatsapp.
User can do chatting either in 2 way or with more than 2 person at the same time.
If user joined/left the chat it will be shown to each and every person who are involve in chatting.



# TECHNOLOGY USED: Nodejs, Socket.io, httpServer, HTML, Js, CSS
1. httpServer is used for creating the server.
   const httpServer = require("http").createServer();
2. Socket.io is used for making connection between client and server.
3. This App is basically built by using Nodejs.


# HOW TO Execute the CODE ? :-

# Must install http, socket.io, nodemon and CORS
# Install nodemon using : npm install -g nodemon   
because "nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are  detected."
# Install socket.io using: npm install socket.io
# Install http using : npm install http
# Install CORS using : npm install cors  and then include below code to index.js which is a server file.
# Install CORS because server is running on 'http://localhost:8000' and for this include: 
    const io = require("socket.io")(httpServer, {
      cors: {
        origin: '*',
      }
    }); 
# Server is listening on port no. 8000
# In the terminal by going inside nodeServer folder write  "nodemon .\index.js"  to start nodemon and then run "index.html" on open live server then start chatting. 


#  ABOUT FILE & FOLDER
# index.html file is the main index frontend file for the app.
# index.js file is the server side file which is inside nodeServer file
# client.js file is of client side.
# style.css file is css file of app
# ting.mp3 is an audio file which is used for sound whenever user receive the message from anyone.
# chat.jpg is the logo image.
