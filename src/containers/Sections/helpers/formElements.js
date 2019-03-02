import { buildAddressFormElement, buildCareerConsultantFormElements } from '../../../utils/formElements'
import { states } from './statesOptions'

export const address = buildAddressFormElement('address', states)
export const careerConsultant = buildCareerConsultantFormElements('careerConsultant')

export const values = {
  address: {
    address1: '',
    address2: '',
    address3: '',
    address4: '',
    city: '',
    country: '',
    state: '',
    zip: ''
  },
  careerConsultant: {
    phone: '',
    fullName: '',
    photo: '',
    email: ''
  }
}
