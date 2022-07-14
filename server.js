// a simple NODE JS APP HAVE SOME OF THIS CONSTANTS
const express = require('express');
const app = express();

// THIS IS CALLED TO USE WITH THE CLIENT (REACT IN THIS CASE)
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');

// CREATED A LOACL PORT
const LOCAL_PORT = 5000;

// FETCH ALL SCHEMA RELATED DATAs
const schema = require('./schema')


// cors IS USED TO WORK WITH TWO PORTS SIMULATANEOUSLY, MEANING TO USE THE SERVER ACROSS THE CLIENT SIDE
const corsOptions = {
	origin: '*',
	credentials: true,
	credentials: true,
	optionSuccessStatus: 200,
}

app.use(cors(corsOptions))


// DEFINE A LINK TO OUR SERVER GRAPHQL-TEST-GUI
app.use('/graphql', graphqlHTTP({
	schema,
	graphiql: true
}))


// START THE SERVER
app.listen(LOCAL_PORT, () => {
	console.log("Server started!");
})