import React from 'react'
import { UpdatePage } from '../../components/Elements'
import { EventQueries } from '../../queries'
import { formElements, transform, required, initialValues } from './helpers'

const { updateEvent, eventDetail } = EventQueries

export default props => (
  <UpdatePage
    title='Update Event'
    query={eventDetail}
    update={updateEvent}
    formElements={formElements({ mode: 'edit' })}
    initialValues={initialValues}
    required={required}
    transform={transform}
    updateKey='event'
    dataKey='events'
    {...props}
  />
)
