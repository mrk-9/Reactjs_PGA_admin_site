import React from 'react'
import { Query, Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import BaseModal from './base'

const query = gql`
  {
    modal @client {
      show
      data
    }
  }
`

const mutation = gql`
  mutation HideModal {
    hideModal @client
  }
`

export default ({ title, render: ModalBody }) => (
  <Query query={query}>
    {
      ({ loading, error, data: { modal = {} } }) => {
        const { show, data } = modal
        return (
          <Mutation mutation={mutation}>
            {
              hideModal => show ? <BaseModal title={title} hideModal={hideModal}><ModalBody hideModal={hideModal} data={data} /></BaseModal> : null
            }
          </Mutation>
        )
      }
    }
  </Query>
)
