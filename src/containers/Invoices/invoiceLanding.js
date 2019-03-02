import React from 'react'
import { LandingPage } from '../../components/Elements'
import { invoiceColumn } from './helpers'
import { InvoiceQueries } from '../../queries'
import { prop } from 'ramda'

const { invoices } = InvoiceQueries

export const handleRowSelection = ({ history }) => (row, original) => {
  const encoded = prop('id', original)
  if (encoded) history.push(`/invoices/${window.btoa(encoded)}`, prop('id', row))
}

export default (props) => (
  <LandingPage
    title='Invoices'
    titleKey='Invoice Number'
    query={invoices}
    columns={invoiceColumn}
    dataKey='invoices'
    tableLimitSize={10}
    onSelectRow={handleRowSelection}
    {...props}
  />
)
