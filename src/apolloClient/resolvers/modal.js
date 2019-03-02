const __typename = 'Modal'

export const defaults = {
  modal: {
    show: false,
    data: null,
    __typename
  }
}

const resolve = (item, cache) => {
  const data = {
    modal: {
      ...item,
      __typename
    }
  }
  cache.writeData({ data })
  return data
}

export const resolvers = {
  showModal: (_, { data }, { cache }) => resolve({ show: true, data }, cache),
  hideModal: (_, args, { cache }) => resolve({ show: false }, cache)
}
