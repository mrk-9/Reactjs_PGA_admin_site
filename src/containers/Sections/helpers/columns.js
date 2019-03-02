import { dateColumns } from '../../../components/Elements/Table/columnHelpers'

export const sectionColumn = [
  {
    Header: 'ID',
    accessor: 'id'
  },
  {
    Header: 'Section Name',
    accessor: 'name'
  },
  {
    Header: 'Career Consultant',
    accessor: 'careerConsultant.fullName'
  },
  ...dateColumns
]
