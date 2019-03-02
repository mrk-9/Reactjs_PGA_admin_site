import { gql } from 'apollo-boost'

export const PAYMENTTYPE = `
  id
  name
  createdAt
  updatedAt
  ledgerId
  clearingAccountId
`

export const paymentType = `
  id
  name
  section {
    id
    name
  }
  createdAt
  updatedAt
  ledgerId
  clearingAccountId
`

const paymentTypes = gql`
{
  paymentTypes {
    edges {
      node {
        ${paymentType}
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
`

const paymentTypeDetail = gql`
query PaymentTypeDetailQuery($id: ID!) {
  paymentType(id: $id) {
    ${paymentType}
  }
}
`

const createPaymentType = gql`
  mutation CreatePaymentType($input: AddPaymentTypeInput!) {
    createPaymentType(input: $input) {
      ${paymentType}
    }
  }
`

const deletePaymentType = gql`
  mutation DeletePaymentType($id: ID!) {
    deletePaymentType(id: $id) {
      ${paymentType}
    }
  }
`

const updatePaymentType = gql`
  mutation UpdatePaymentType($id: ID!, $input: UpdatePaymentTypeInput) {
    updatePaymentType(id: $id, input: $input) {
      ${paymentType}
    }
  }
`

export default {
  paymentTypes,
  paymentTypeDetail,
  createPaymentType,
  deletePaymentType,
  updatePaymentType
}
