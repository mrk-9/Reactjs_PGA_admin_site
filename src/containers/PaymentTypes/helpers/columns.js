import { dateColumns } from '../../../components/Elements/Table/columnHelpers'

export const paymentTypeColumn = [
  {
    Header: 'ID',
    accessor: 'id'
  },
  {
    Header: 'Payment Type',
    accessor: 'name'
  },
  {
    Header: 'Section Name',
    accessor: 'section.name'
  },
  {
    Header: 'Account ID',
    accessor: 'clearingAccountId'
  },
  {
    Header: 'Ledger ID',
    accessor: 'ledgerId'
  },
  ...dateColumns
]
