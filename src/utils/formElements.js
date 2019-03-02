export const buildAddressFormElement = (title, options = []) => [
  {
    name: `${title}.address1`,
    type: 'text',
    label: 'Address 1',
    id: `${title}.address1`,
    placeholder: 'Address 1...',
    component: 'Input'
  },
  {
    name: `${title}.address2`,
    type: 'text',
    label: 'Address 2',
    id: `${title}.address2`,
    placeholder: 'Address 2...',
    component: 'Input'
  },
  {
    name: `${title}.address3`,
    type: 'text',
    label: 'Address 3',
    id: `${title}.address3`,
    placeholder: 'Address 3...',
    component: 'Input'
  },
  {
    name: `${title}.address4`,
    type: 'text',
    label: 'Address 4',
    id: `${title}.address4`,
    placeholder: 'Address 4...',
    component: 'Input'
  },
  {
    name: `${title}.city`,
    type: 'text',
    label: 'City',
    id: `${title}.city`,
    placeholder: 'City...',
    component: 'Input'
  },
  {
    name: `${title}.state`,
    type: 'text',
    label: 'State',
    options,
    id: `${title}.state`,
    placeholder: 'State...',
    component: 'Select',
    hasStyle: true
  },
  {
    name: `${title}.zip`,
    type: 'text',
    label: 'Zip',
    id: `${title}.zip`,
    placeholder: 'Zip...',
    component: 'Input'
  }
]

export const buildCareerConsultantFormElements = title => [
  {
    name: `${title}.phone`,
    type: 'phone',
    label: 'Phone',
    id: `${title}.phone`,
    placeholder: 'Phone...',
    component: 'Input'
  },
  {
    name: `${title}.fullName`,
    type: 'text',
    label: 'FullName',
    id: `${title}.FullName`,
    placeholder: 'fullName...',
    component: 'Input'
  },
  {
    name: `${title}.email`,
    type: 'email',
    label: 'Email',
    id: `${title}.email`,
    placeholder: 'Email...',
    component: 'Input'
  }
  // Todo: Add Image Update
]
