import {
  InMemoryCache,
  ApolloClient,
  NormalizedCacheObject,
} from "@apollo/client"

import { createUploadLink } from 'apollo-upload-client'

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  return new ApolloClient({
    link: createUploadLink({
      uri: process.env.GRAPHQL_URI
    }),
    cache: new InMemoryCache(),
  });
}

function initializeApollo() {
  apolloClient = apolloClient ?? createApolloClient();
  return apolloClient;
}

export function useApollo() {
  return initializeApollo()
}