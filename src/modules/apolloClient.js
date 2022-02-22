// Libraries
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const link = new HttpLink({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`,
  },
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: link,
  cache: cache,
});

export { client };
