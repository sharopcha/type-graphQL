import { ApolloServer } from 'apollo-server-express';
import * as Express from 'express';
import { buildSchema, Resolver, Query } from 'type-graphql';
import 'reflect-metadata';

@Resolver()
class HelloResolver {
  @Query(() => String, )
  async hello() {
    return 'Hello world';
  }
}

const main = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
  });

  const apolloServer = new ApolloServer({ schema });

  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('Server started on http://localhost:4000/graphql');
  });
};

main();
