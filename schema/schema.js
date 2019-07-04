// Require graph QL for the schema
const graphql = require('graphql');
const _ = require('lodash');

// Start by describing the object types
// we want in our schema, the relationships
// and how to call them

// Define object types
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// Dummy Data
const books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' }
];

// Define the book type
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});

// Define Root Queries
// This defines how the user grapb data
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: { type: GraphQLString }
            },
            resolve(parent, args) {
                // Code to get data from DB / other source

                // For now return from dummy data
                return _.find(books, { id: args.id });
            }
        }
    }
});

// Export the Schema
module.exports = new GraphQLSchema({
    query: RootQuery
})