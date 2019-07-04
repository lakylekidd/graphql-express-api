// Import required modules
const koa = require('koa');
import koaRouter from 'koa-router';
import koaBody from 'koa-bodyparser';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import schema from './schema/schema';

// Initialize koa server and router and set port
const app = new koa();
const router = new koaRouter();
const PORT = process.env.PORT || 3000;

// Display welcome message
console.clear();
console.log(
    '   :{) Welcome!\n',
    '  ---------------------------------------\n');

// Setup the graphql server routes with the Schema
router.post('/graphql', koaBody(), graphqlKoa({
    schema
}));
router.get('/graphql', graphqlKoa({
    schema
}));

// Setup the /graphiql route to show the GraphiQL UI
router.get('/graphiql', graphiqlKoa({
    endpointURL: '/graphql',
    // passHeader: `'Authorization': 'Bearer <test token>'`,
}));

// Use the routes specified
app.use(router.routes());
app.use(router.allowedMethods());

// Start listening to port
app.listen(PORT, () => {
    const url = `http://localhost:${PORT}`;
    console.log(`   GraphQL server started on:\n   ${url}\n\n`,
        `➜ Open ${url}/graphiql to\n   start querying your API.\n\n`,
        `➜ Point your GraphQL client apps to\n   ${url}/graphql\n`,
        ' ---------------------------------------\n');
});