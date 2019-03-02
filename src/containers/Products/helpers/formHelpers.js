import { EventQueries } from '../../../queries'

const projectAccount = [
  {
    name: 'projectAccount.contractId',
    type: 'text',
    label: 'Contract Number',
    id: 'projectAccount.contractId',
    placeholder: 'Contract Number...',
    description: 'Ex: 18-MW Section Revenue or PGA TOURNAMENT REVENUE CONTRACT',
    component: 'Input'
  },
  {
    name: 'projectAccount.contractLine',
    type: 'text',
    label: 'Contract Line',
    id: 'projectAccount.contractLine',
    placeholder: 'Contract Line...',
    description: 'Ex: Revenue',
    component: 'Input'
  },
  {
    name: 'projectAccount.contractType',
    type: 'text',
    label: 'Contract Type',
    id: 'projectAccount.contractType',
    placeholder: 'Contract Type...',
    description: 'Ex: Revenue Contract',
    component: 'Input'
  },
  {
    name: 'projectAccount.eventTypeName',
    type: 'text',
    label: 'Event Type Name',
    id: 'projectAccount.eventTypeName',
    placeholder: 'Event Type Name...',
    description: 'Ex: Food and Beverage Ticket Sales or Volunteer Pkg Revenue',
    component: 'Input'
  },
  {
    name: 'projectAccount.organizationName',
    type: 'text',
    label: 'Organization Name',
    id: 'projectAccount.organizationName',
    placeholder: 'Organization Name...',
    description: 'Ex: Philadelphia Section PGA or PGA OF AMERICA',
    component: 'Input'
  },
  {
    name: 'projectAccount.projectId',
    type: 'text',
    label: 'Project Number',
    id: 'projectAccount.projectId',
    placeholder: 'Project Number...',
    description: 'Ex: 18MW-Drive_Chip_&_Putt or 2019 PGA Pro Champ',
    component: 'Input'
  },
  {
    name: 'projectAccount.taskId',
    type: 'text',
    label: 'Task Number',
    id: 'projectAccount.taskId',
    placeholder: 'Task Number...',
    description: 'Ex: Other Chalet Rev or 1-Entry-fees or Revenue',
    component: 'Input'
  }
]

export const formElements = [
  {
    name: 'name',
    type: 'text',
    label: 'Product Name',
    id: 'name',
    placeholder: 'Product name...',
    component: 'Input'
  },
  {
    name: 'eventId',
    type: 'select',
    label: 'Event',
    id: 'eventId',
    dataKey: 'events',
    query: EventQueries.events,
    placeholder: 'Choose an event from the list...',
    component: 'Select'
  },
  {
    name: 'ledgerId',
    type: 'text',
    label: 'Ledger ID',
    id: 'ledgerId',
    placeholder: 'Ledger ID...',
    component: 'Input'
  },
  {
    name: 'taxAccountId',
    type: 'text',
    label: 'Tax Account Code',
    id: 'taxAccountId',
    placeholder: 'Tax Account Code...',
    component: 'Input'
  },
  {
    name: 'revenueAccountId',
    type: 'text',
    label: 'Revenue Account Code',
    id: 'revenueAccountId',
    placeholder: 'Revenue Account Code...',
    component: 'Input'
  },
  {
    name: 'projectAccount',
    group: 'Project Account',
    elements: projectAccount
  }
]

export const initialValues = {
  name: '',
  eventId: '',
  ledgerId: '',
  taxAccountId: '',
  revenueAccountId: '',
  projectAccount: {
    contractId: '',
    contractLine: '',
    contractType: '',
    eventTypeName: '',
    organizationName: '',
    projectId: '',
    taskId: ''
  }
}

export const required = ['name', 'eventId']

export const transform = { eventId: 'event' }
