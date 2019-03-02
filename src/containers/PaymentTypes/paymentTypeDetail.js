import React from 'react'
import { DetailPage } from '../../components/Elements'
import { PaymentTypesQueries } from '../../queries'

const { paymentTypeDetail } = PaymentTypesQueries

export default ({ match: { params }, ...rest }) => (
  <DetailPage
    query={paymentTypeDetail}
    id={params.paymentTypeId}
    dataKey='paymentType'
    updateKey='paymentTypes'
    {...rest}
  />
)
