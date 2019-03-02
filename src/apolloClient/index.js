import ApolloClient from 'apollo-boost'
import { getToken } from '@pga/auth-provider'
import { resolvers, defaults } from './resolvers'
import redirects from './redirects'

const apolloClient = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_ENDPOINT}/graphql`,
  request: async (operation) => {
    const token = await getToken()
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`
      }
    }))
  },
  clientState: { resolvers, defaults },
  cacheRedirects: {
    Query: redirects
  }
})

apolloClient.defaultOptions = {
  watchQuery: {
    errorPolicy: 'all'
  },
  query: {
    errorPolicy: 'all'
  },
  mutate: {
    errorPolicy: 'all'
  }
}

export default apolloClient
