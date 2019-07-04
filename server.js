// Require express
const express = require('express');
const graphqlHTTP = require('express-graphql');

// Create the app using express
const app = express();

// Start using graphQL
app.use('/graphql', graphqlHTTP({

}))

// Start listening
app.listen(4000, () => {
    console.log("Listening on port 4000");
})