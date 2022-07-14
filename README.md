# React-GraphQL-Sort
## OZEE FC

The application is called OZEE FC and it is a club related application
This simple application just registers  the date players resumed training and shows the injured player from the Interatinal break ad avaialable players as well as thier nationality as provided by the data in the server side.
By default, Onload, the players are displayed.

The application is powered by the serverside which is run at port 5000
The frontend, React in this case, ir run at Port 3000.

# Folder Structure
The Client side of the application is foun in the "frontend-job" folder, white the server side can be found on the other files/folder aside fron the afore mentioned client folder

# Server
To start the server, just open a terminal on the root folder and type "npm start" and the server should start at port 5000.
## Server File Structure 
The data filed are stored in the schema folder and the server.js file is serving as the starting point of the server file as against the default "index.js" file

# Client
The application is found on the front-end folder and its powered by ReactJs front-end
To start the the front end application, run npm run strt and it will run at PORT 3000
## Client File structure
The server is passed as a context provider to the application from the Apollo Provider.

The Application was manually created as to filter for the available and injured players, on will be redirected to the various links as provided on search


