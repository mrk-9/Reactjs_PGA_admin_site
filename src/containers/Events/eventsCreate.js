import React from 'react'
import { CreatePage } from '../../components/Elements'
import { EventQueries } from '../../queries'
import { formElements, initialValues, required } from './helpers'

const { createEvent, events } = EventQueries

export default props => (
  <div>
    <CreatePage
      title='Create Event'
      formElements={formElements({ mode: 'create' })}
      initialValues={initialValues}
      required={required}
      mutation={createEvent}
      createKey='createEvent'
      dataKey='events'
      refetch={events}
      {...props}
    />
  </div>
)
