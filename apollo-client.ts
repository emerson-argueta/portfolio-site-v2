import { ApolloClient, InMemoryCache } from "@apollo/client";

const baseUri = process.env.SITE || 'http://localhost:3000'
const client = new ApolloClient({
    uri: baseUri + "/api/graphql",
    cache: new InMemoryCache(),
});

export default client;