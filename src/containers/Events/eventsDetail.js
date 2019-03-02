import React from 'react'
import { DetailPage } from '../../components/Elements'
import { EventQueries } from '../../queries'

const { eventDetail } = EventQueries

export default ({ match: { params }, ...rest }) => (
  <DetailPage query={eventDetail} id={params.eventId} dataKey='event' updateKey='events' {...rest} />
)
