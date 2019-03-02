import React from 'react'
import { UpdatePage } from '../../components/Elements'
import { PaymentTypesQueries } from '../../queries'
import { formElements, transform, required, initialValues } from './helpers'

const { updatePaymentType, paymentTypeDetail } = PaymentTypesQueries

export default (props) => (
  <UpdatePage
    title='Update PaymentType'
    query={paymentTypeDetail}
    update={updatePaymentType}
    formElements={formElements}
    initialValues={initialValues}
    required={required}
    transform={transform}
    updateKey='paymentType'
    dataKey='paymentTypes'
    {...props}
  />
)
