import { gql } from 'apollo-boost'
import { PRODUCT } from './products'

const INVOICE = `
  id
  invoiceNumber
  subtotal
  tax
  total
  invoiceUrl
  items {
    price
    tax
    quantity
    subtotal
    total
    product {
      ${PRODUCT}
    }
  }
  payments {
    transactionNumber
    amount
    type {
      id
      name
      ledgerId
      clearingAccountId
      section {
        id
        name
      }
    }
  }
  date
  createdBy {
    id
    displayName
    role
    section {
      id
      name
      address {
        address1
        address2
        address3
        address4
        city
        country
        state
        zip
      }
    }
    createdAt
    updatedAt
  }
  createdAt
`

const invoices = gql`
{
  invoices {
    edges {
      cursor
      node {
        ${INVOICE}
      }
    }
  }
}`

const invoiceDetail = gql`
query InvoiceDetailQuery($id: ID!) {
  invoice(id: $id) {
    ${INVOICE}
  }
}
`

export default {
  invoices,
  invoiceDetail
}
