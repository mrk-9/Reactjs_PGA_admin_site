import { gql } from 'apollo-boost'

const JOURNAL = `
    id
    date
    ledgerId
    source
    status
    error
    createdAt
    journalEntries {
        accountId
        amount
        date
        ledgerId
        source
        invoices
    }
`

const journals = gql`
{
    journals(first: 100) {
        edges {
            node {
                ${JOURNAL}
            }
        }
        pageInfo {
            hasPreviousPage
            hasNextPage
        }
    }
}`

export default {
  journals
}
