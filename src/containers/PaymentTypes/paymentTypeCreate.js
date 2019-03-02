import React from 'react'
import { CreatePage } from '../../components/Elements'
import { PaymentTypesQueries } from '../../queries'
import { initialValues, required, formElements } from './helpers'

const { createPaymentType, paymentTypes } = PaymentTypesQueries

export default (props) => (
  <div>
    <CreatePage
      title='Create Payment Type'
      formElements={formElements}
      initialValues={initialValues}
      required={required}
      mutation={createPaymentType}
      createKey='createPaymentType'
      dataKey='paymentTypes'
      refetch={paymentTypes}
      {...props}
    />
  </div>
)
