import { gql } from 'apollo-boost'

const EVENT = `
    id
    amount
    eventNumber
    contractId
    contractLine
    contractType
    createdAt
    date
    error
    eventTypeName
    organizationName
    projectId
    source
    status
    taskId
    invoices
`

const billingEvents = gql`
{
    billingEvents(first: 500) {
        edges {
            node {
                ${EVENT}
            }
            cursor
        }
        pageInfo {
            hasPreviousPage
            hasNextPage
        }
    }
}`

export default {
  billingEvents
}
