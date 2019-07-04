// Require graph QL for the schema
const graphql = require('graphql');

// Start by describing the object types
// we want in our schema, the relationships
// and how to call them

// Define object types
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// Define the book type
const BookType = GraphQLObjectType({
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

            }
        }
    }
});

// Export the Schema
module.exports = new GraphQLSchema({
    query: RootQuery
})