export default {
  paymentType: (_, { id }, { getCacheKey }) =>
    getCacheKey({ __typename: 'PaymentType', id })
}
