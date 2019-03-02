import React from 'react'
import { LandingPage } from '../../components/Elements'
import { PaymentTypesQueries } from '../../queries'
import { paymentTypeColumn } from './helpers'

const { paymentTypes, deletePaymentType } = PaymentTypesQueries

export const handleRowSelection = ({ history }) => (row, original) => {
  const id = original.id
  history.push(`/paymentTypes/${id}`)
}

export default (props) => (
  <LandingPage
    title='Payment Types'
    titleKey='Payment Type'
    query={paymentTypes}
    mutation={deletePaymentType}
    columns={paymentTypeColumn}
    dataKey='paymentTypes'
    tableLimitSize={10}
    onSelectRow={handleRowSelection}
    hasCreate
    editableColumn={{canDelete: true, canEdit: true}}
    {...props}
  />
)
