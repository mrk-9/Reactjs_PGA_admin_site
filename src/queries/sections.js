import { gql } from 'apollo-boost'
import { PAYMENTTYPE } from './paymentTypes'

export const SECTION = `
id
name
paymentTypes {
  edges {
    node {
      ${PAYMENTTYPE}
    }
  }
}
address {
  address1
  city
  state
  zip
}
careerConsultant {
  fullName
  email
  phone
  photo
}
createdAt
updatedAt
`

const sections = gql`
{
  sections {
    edges {
      node {
        ${SECTION}
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
`

const sectionDetail = gql`
query SectionDetailQuery($id: ID!) {
  section(id: $id) {
    ${SECTION}
  }
}
`

const updateSection = gql`
  mutation UpdateProduct($id: ID!, $input: UpdateSectionInput) {
    updateSection(id: $id, input: $input) {
      ${SECTION}
    }
  }
`

export default {
  sections,
  sectionDetail,
  updateSection
}
