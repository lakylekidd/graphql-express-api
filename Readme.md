# GraphQL Express API
This is an example of a functioning GraphQL API that can be found deployed on heroku [here](https://graphql-sample-api.herokuapp.com/).

## Technologies used
* PostgreSQL
* Koa
* Apollo Server
* GraphQL
* Sequelize
* Docker for PostgreSQL.

## Instructions
In order to use this repo you need to run a postgres image locally by running `docker run --name postgres -e POSTGRES_PASSWORD=secret -d postgres`. After that:
1. Clone this repo
2. Run `npm install`
3. Run `npm run dev` to start the server locally.
3. Visit `http://localhost:4000/graphiql`.
4. Use [GraphQL commands](https://graphql.org/learn/queries/) to view books and authors. For Reference click on the Docs link on the upper right corner of your browser.

## GraphQL Client
In order to query the data with a client, you can check [this React Client](https://github.com/lakylekidd/graphql-react-client) and follow the instructions to run it locally.
