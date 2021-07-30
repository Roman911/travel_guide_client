import React from 'react'
import { ApolloClient, InMemoryCache, NormalizedCacheObject } from "@apollo/client"
import { createUploadLink } from 'apollo-upload-client'

let apolloClient: ApolloClient<NormalizedCacheObject>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createUploadLink({
      uri: process.env.GRAPHQL_URI
    }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }

  if (typeof window === 'undefined') return _apolloClient

  apolloClient = apolloClient ?? _apolloClient

  return apolloClient
}

export function useApollo(initialState) {
  return React.useMemo(() => initializeApollo(initialState), [initialState])
}