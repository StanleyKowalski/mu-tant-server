import { buildSchema } from 'graphql';
import { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLInputObjectType, GraphQLNonNull } from 'graphql/type';
import graphqlHTTP from 'express-graphql';


// // Construct a schema, using GraphQL schema language
// const schema = buildSchema(`
//   type Chart {
//     id: ID!
//
//   }
//   type Query {
//     chart: Chart
//   }
// `);

const ChartType = new GraphQLObjectType({
  name: 'Chart',
  fields: {
    id: { type: GraphQLID }
  }
});

const GetChartInputType = new GraphQLInputObjectType({
  name: 'GetChart',
  field: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    chart: { type: ChartType, input: GetChartInputType }
  }
});

const schema = new GraphQLSchema({
  query: RootQuery
})

// The root provides a resolver function for each API endpoint
const root = {
  chart: (root, args) => {
    console.log(Object.keys(args));
    console.log(arguments);
    return { id: 666 };
  },
};

export default graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
});
