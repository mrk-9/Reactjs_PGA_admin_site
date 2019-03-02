import { defaultSortMethod, moneyRender } from '../../../components/Elements/Table/columnHelpers'

export const journalColumn = [
  {
    Header: 'Ledger ID',
    accessor: 'ledgerId'
  },
  {
    Header: 'Source',
    accessor: 'source'
  },
  {
    Header: 'Amount',
    accessor: 'journalEntries[0].amount',
    Cell: moneyRender('journalEntries[0].amount')
  },
  {
    Header: 'Status',
    accessor: 'status'
  },
  {
    Header: 'Error',
    accessor: 'error'
  },
  {
    Header: 'Date',
    accessor: 'date'
  },
  {
    Header: 'Created At',
    accessor: 'createdAt',
    sortMethod: defaultSortMethod
  }
]
