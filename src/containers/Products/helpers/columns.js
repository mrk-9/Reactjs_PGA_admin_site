import { dateColumns } from '../../../components/Elements/Table/columnHelpers'

export const productColumn = [
  {
    Header: 'ID',
    accessor: 'id'
  },
  {
    Header: 'Product Name',
    accessor: 'name'
  },
  {
    Header: 'Event Name',
    accessor: 'event.name'
  },
  {
    Header: 'Section Name',
    accessor: 'event.section.name'
  },
  ...dateColumns
]
