export default {
  invoice: (_, { id }, { getCacheKey }) =>
    getCacheKey({ __typename: 'Invoice', id })
}
