import React from 'react'
import { LandingPage } from '../../components/Elements'
import { billingEventColumn } from './helpers'
import { BillingEventsQueries } from '../../queries'

const { billingEvents } = BillingEventsQueries

export default (props) => (
  <LandingPage
    title='Billing Events'
    titleKey='Billing Event Number'
    query={billingEvents}
    columns={billingEventColumn}
    dataKey='billingEvents'
    tableLimitSize={10}
    onSelectRow={() => null}
    {...props}
  />
)
