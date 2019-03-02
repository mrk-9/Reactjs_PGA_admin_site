import { defaultSortMethod, moneyRender } from '../../../components/Elements/Table/columnHelpers'

export const billingEventColumn = [
  {
    Header: 'Event Number',
    accessor: 'eventNumber'
  },
  {
    Header: 'EventTypeName',
    accessor: 'eventTypeName'
  },
  {
    Header: 'ProjectID',
    accessor: 'projectId'
  },
  {
    Header: 'Source',
    accessor: 'source'
  },
  {
    Header: 'Amount',
    accessor: 'amount',
    Cell: moneyRender('amount')
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
    Header: 'CreatedAt',
    accessor: 'createdAt',
    sortMethod: defaultSortMethod
  }
]
