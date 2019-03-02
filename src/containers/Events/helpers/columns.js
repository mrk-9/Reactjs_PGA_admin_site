import { dateColumns, booleanRender } from '../../../components/Elements/Table/columnHelpers'

export const eventColumn = [
  {
    Header: 'ID',
    accessor: 'id'
  },
  {
    Header: 'Event Name',
    accessor: 'name'
  },
  {
    Header: 'Section Name',
    accessor: 'section.name'
  },
  {
    Header: 'Closed',
    accessor: 'closed',
    Cell: booleanRender('closed')
  },
  ...dateColumns
]
