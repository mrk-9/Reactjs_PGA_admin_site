import { gql } from 'apollo-boost'
import { SECTION } from './sections'

export const EVENT = `
id
name
section {
  ${SECTION}
}
closed
createdAt
updatedAt
`

const events = gql`
{
  events {
    edges {
      node {
        ${EVENT}
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
`

const eventDetail = gql`
query EventDetailQuery($id: ID!) {
  event(id: $id) {
    ${EVENT}
  }
}
`

const createEvent = gql`
  mutation CreateEvent($input: AddEventInput!) {
    createEvent(input: $input) {
      ${EVENT}
    }
  }
`

const deleteEvent = gql`
  mutation DeleteEvent($id: ID!) {
    deleteEvent(id: $id) {
      ${EVENT}
    }
  }
`

const updateEvent = gql`
  mutation UpdateEvent($id: ID!, $input: UpdateEventInput!) {
    updateEvent(id: $id, input: $input) {
      ${EVENT}
    }
  }
`

export default {
  events,
  eventDetail,
  createEvent,
  deleteEvent,
  updateEvent
}
