import { SectionQueries } from '../../../queries'

export const formElements = [
  {
    name: 'name',
    type: 'text',
    label: 'Payment Type Name',
    id: 'name',
    placeholder: 'Payment Type name...',
    component: 'Input'
  },
  {
    name: 'sectionId',
    type: 'select',
    label: 'Section',
    id: 'sectionId',
    dataKey: 'sections',
    query: SectionQueries.sections,
    placeholder: `Choose a section from the list...`,
    component: 'Select'
  },
  {
    name: 'ledgerId',
    type: 'text',
    label: 'Ledger ID',
    id: 'ledgerId',
    placeholder: 'Ledger ID...',
    description: 'There is one ledger ID per section',
    component: 'Input'
  },
  {
    name: 'clearingAccountId',
    type: 'text',
    label: 'Cash Account Code',
    id: 'clearingAccountId',
    placeholder: 'Clearing Account ID...',
    component: 'Input'
  }
]

export const initialValues = {
  name: '',
  sectionId: '',
  clearingAccountId: '',
  ledgerId: ''
}

export const required = ['name', 'sectionId']

export const transform = { sectionId: 'section' }
