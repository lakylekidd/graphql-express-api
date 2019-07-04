// Import dependencies
const Sequelize = require('sequelize');
const db = require('./../db');

// Define a book
const Book = db.define(
    'book',
    {
        name: {
            type: Sequelize.STRING
        },
        genre: {
            type: Sequelize.STRING
        },
        authorId: {
            type: Sequelize.INTEGER
        }
    },
    {
        tableName: 'books'
    }
);

// Export the model
module.exports = Book;