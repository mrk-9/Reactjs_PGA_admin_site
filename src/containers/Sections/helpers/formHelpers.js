import { careerConsultant, address, values } from './formElements'

export const formElements = [
  {
    name: 'name',
    type: 'text',
    label: 'Section Name',
    id: 'name',
    placeholder: 'Section name...',
    component: 'Input'
  },
  {
    name: 'address',
    group: 'Address',
    elements: address
  },
  {
    name: 'careerConsultant',
    group: 'Career Consultant',
    elements: careerConsultant
  }
]

export const initialValues = {
  name: '',
  ...values
}

export const required = ['name']
