export default {
  product: (_, { id }, { getCacheKey }) =>
    getCacheKey({ __typename: 'Product', id })
}
