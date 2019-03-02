export default {
  event: (_, { id }, { getCacheKey }) =>
    getCacheKey({ __typename: 'Event', id })
}
