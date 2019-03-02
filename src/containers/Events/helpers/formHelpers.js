import { SectionQueries } from '../../../queries'

const { sections } = SectionQueries

export const formElements = ({ mode }) => [
  {
    name: 'id',
    type: 'text',
    label: 'Event Id',
    id: 'id',
    placeholder: 'Event Id...',
    component: 'Input',
    disabled: mode === 'edit'
  },
  {
    name: 'name',
    type: 'text',
    label: 'Event Name',
    id: 'name',
    placeholder: 'Event name...',
    component: 'Input'
  },
  {
    name: 'sectionId',
    type: 'select',
    label: 'Section',
    id: 'sectionId',
    dataKey: 'sections',
    query: sections,
    placeholder: `Choose a section from the list...`,
    component: 'Select'
  },
  {
    name: 'closed',
    type: 'radio',
    label: 'Closed',
    id: 'closed',
    component: 'Radio',
    booleanType: true,
    data: [
      {
        label: 'Yes',
        id: 'yes',
        value: 'true'
      },
      {
        label: 'No',
        id: 'no',
        value: 'false'
      }
    ]
  }
]

export const initialValues = {
  id: '',
  name: '',
  sectionId: '',
  closed: false
}

export const required = ['name', 'sectionId']

export const transform = { sectionId: 'section' }
