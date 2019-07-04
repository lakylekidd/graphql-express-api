// Require express
const express = require('express');

// Create the app using express
const app = express();

// Start listening
app.listen(4000, () => {
    console.log("Listening on port 4000");
})