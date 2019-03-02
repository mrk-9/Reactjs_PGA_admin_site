const __typename = 'Auth'

export const defaults = {
  auth: {
    isLoggedIn: false,
    isAdmin: false,
    silentRenewalTokenUri: null,
    __typename
  }
}

const resolve = (item, cache) => {
  const data = {
    auth: {
      ...item,
      __typename
    }
  }
  cache.writeData({ data })
  return null
}

export const resolvers = {
  setIsLoggedIn: (_, { isLoggedIn }, { cache }) => resolve({ isLoggedIn }, cache),
  setIsAdmin: (_, { isAdmin }, { cache }) => resolve({ isAdmin }, cache),
  setSilentRenewalTokenUri: (_, { silentRenewalTokenUri }, { cache }) => resolve({ silentRenewalTokenUri }, cache)
}
