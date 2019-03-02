import { gql } from 'apollo-boost'
import { EVENT } from './events'

export const PRODUCT = `
id
name
event {
  ${EVENT}
}
createdAt
updatedAt
ledgerId
revenueAccountId
taxAccountId
projectAccount {
  contractId
  contractLine
  contractType
  eventTypeName
  organizationName
  projectId
  taskId
}
`

const products = gql`
{
  products {
    edges {
      node {
        ${PRODUCT}
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
`

const productDetail = gql`
query ProductDetailQuery($id: ID!) {
  product(id: $id) {
    ${PRODUCT}
  }
}
`
const createProduct = gql`
  mutation CreateProduct($input: AddProductInput!) {
    createProduct(input: $input) {
      ${PRODUCT}
    }
  }
`

const deleteProduct = gql`
  mutation DeleteProduct($id: ID!) {
    deleteProduct(id: $id) {
      ${PRODUCT}
    }
  }
`

const updateProduct = gql`
  mutation UpdateProduct($id: ID!, $input: UpdateProductInput) {
    updateProduct(id: $id, input: $input) {
      ${PRODUCT}
    }
  }
`

export default {
  products,
  productDetail,
  createProduct,
  deleteProduct,
  updateProduct
}
