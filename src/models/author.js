// Import dependencies
const Sequelize = require('sequelize');
const db = require('./../db');

// Define a author
const Author = db.define(
    'author',
    {
        name: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        }
    },
    {
        tableName: 'authors'
    }
);

// Export the model
module.exports = Author;