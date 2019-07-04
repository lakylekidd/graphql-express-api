// Require graph QL for the schema
const graphql = require('graphql');
const _ = require('lodash');

// Start by describing the object types
// we want in our schema, the relationships
// and how to call them

// Define object types
const {
    GraphQLObjectType, GraphQLString, GraphQLSchema,
    GraphQLID, GraphQLInt
} = graphql;

// Dummy Data
const books = [
    { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
    { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
    { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' }
];
const authors = [
    { name: 'Patrick Rotfuss', age: 44, id: '1' },
    { name: 'Brandon Sanderson', age: 42, id: '2' },
    { name: 'Terry Pratchett', age: 66, id: '3' },
]

// Define the book type
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
});
// Define the author type
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
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
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                // Code to get data from DB / other source

                // For now return from dummy data
                return _.find(books, { id: args.id });
            }
        },
        author: {
            type: AuthorType,
            args: {
                id: { type: GraphQLID }
            },
            resolve(parent, args) {
                // Code to get data from DB / other source
                // For now return from dummy data
                return _.find(authors, { id: args.id });
            }
        }
    }
});

// Export the Schema
module.exports = new GraphQLSchema({
    query: RootQuery
})