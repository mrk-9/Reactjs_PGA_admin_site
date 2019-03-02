import React from 'react'
import { LandingPage } from '../../components/Elements'
import { journalColumn } from './helpers'
import { JournalQueries } from '../../queries'

const { journals } = JournalQueries

export default (props) => (
  <LandingPage
    title='Journals'
    titleKey='Journal Number'
    query={journals}
    columns={journalColumn}
    dataKey='journals'
    tableLimitSize={10}
    onSelectRow={() => null}
    {...props}
  />
)
