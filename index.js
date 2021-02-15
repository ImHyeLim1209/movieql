//new(es6) 버전: npm install @babel/core @babel/cli @babel/node @babel/preset-env --save-dev
import { GraphQLServer } from "graphql-yoga"
import resolvers from "./graphql/resolvers"

//old 버전
//const graphqlYoga = require("graphql-yoga");



/* 이렇게 쓸 수도 있어..
const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`
const resolvers = {
    Query: {
        hello: (_, { name }) => `Hello ${name || 'World'}`,
    },
}
const server = new GraphQLServer({ typeDefs, resolvers });
*/



const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers
});
server.start(() => console.log('Server is running on localhost:4000'));