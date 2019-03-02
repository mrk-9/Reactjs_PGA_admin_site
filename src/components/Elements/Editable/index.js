import React from 'react'
import styled from 'styled-components'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'
import { FaIcon } from '../../Elements/Icons'

const mutation = gql`
  mutation ShowModal($data: String!) {
    showModal(data: $data) @client
  }
`

const Button = styled.a`
  padding-right: 5px
  padding-left: 5px
  margin-left: 10px
  margin-right: 10px
  cursor: pointer
  
  i {
    font-size: 20px
  }
`

export const Delete = ({ id }) => (
  <Mutation mutation={mutation}>
    {
      showModal => <Button onClick={showModal.bind(null, { variables: { data: id } })}><FaIcon data-type='delete' icon='trash' /></Button>
    }
  </Mutation>
)

export const Edit = ({ onEdit }) => <Button onClick={onEdit}><FaIcon data-type='edit' icon='pencil' /></Button>
