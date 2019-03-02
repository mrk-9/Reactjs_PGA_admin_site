import React from 'react'
import { LandingPage } from '../../components/Elements'
import { EventQueries } from '../../queries'
import { eventColumn } from './helpers'

const { events, deleteEvent } = EventQueries

export const handleRowSelection = ({ history }) => (row, original) => {
  const id = original.id
  history.push(`/events/${id}`)
}

export default (props) => (
  <LandingPage
    title='Events'
    titleKey='Event Name'
    query={events}
    mutation={deleteEvent}
    columns={eventColumn}
    dataKey='events'
    tableLimitSize={10}
    onSelectRow={handleRowSelection}
    hasCreate
    editableColumn={{canDelete: true, canEdit: true}}
    {...props}
  />
)
