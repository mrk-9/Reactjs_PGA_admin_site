export default {
  section: (_, { id }, { getCacheKey }) =>
    getCacheKey({ __typename: 'Section', id })
}
