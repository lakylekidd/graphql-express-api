// Require express
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

// Create the app using express
const app = express();

// Start using graphQL
app.use('/graphql', graphqlHTTP({
    schema: schema
}))

// Start listening
app.listen(4000, () => {
    console.log("Listening on port 4000");
})