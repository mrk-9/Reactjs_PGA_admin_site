const __typename = 'Toast'

export const defaults = {
  toast: {
    id: 1,
    __typename
  }
}

const resolve = (item, cache) => {
  const data = {
    toast: {
      ...item,
      __typename
    }
  }
  cache.writeData({ data })
  return data
}

export const resolvers = {
  updateToast: (_, { id }, { cache }) => resolve({ id }, cache)
}
