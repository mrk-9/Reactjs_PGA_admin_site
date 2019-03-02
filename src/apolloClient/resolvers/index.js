import { defaults as authDefaults, resolvers as authResolvers } from './auth'
import { defaults as modalDefaults, resolvers as modalResolvers } from './modal'
import { defaults as toastDefaults, resolvers as toastResolvers } from './toast'

export const defaults = {
  ...authDefaults,
  ...toastDefaults,
  ...modalDefaults
}

export const resolvers = {
  Mutation: {
    ...authResolvers,
    ...toastResolvers,
    ...modalResolvers
  }
}
