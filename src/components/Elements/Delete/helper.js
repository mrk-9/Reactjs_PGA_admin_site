import React, { Fragment } from 'react'
import { Mutation } from 'react-apollo'
import Cards from '../Cards'
import { notify } from '../Toast'
import styled from 'styled-components'
import Button from '../Buttons'

const { CardBody, CardFooter } = Cards

const Link = styled(Button)`
  float: right
  margin-right: 10px
`

const ModalButton = ({ handleClick, title, color }) => (
  <Link onClick={handleClick} color={color}>{title}</Link>
)

export const handleSubmit = (deleteRecord, hideModal, data) => async () => {
  hideModal()
  try {
    await deleteRecord({
      variables: { id: data }
    })
    notify({ type: 'success', message: 'Delete successful' })
  } catch (error) {
    notify({ type: 'error', message: 'Delete Failed' })
  }
}

export default ({ hideModal, data, mutation, refetch }) => (
  <Mutation mutation={mutation} refetchQueries={[{ query: refetch }]}>
    {
      deleteRecord => {
        return (
          <Fragment>
            <CardBody>
              <p>Are you sure you want to delete the record</p>
            </CardBody>
            <CardFooter>
              <ModalButton color='primary' title='No' handleClick={hideModal} />
              <ModalButton color='danger' title='Yes' handleClick={handleSubmit(deleteRecord, hideModal, data)} />
            </CardFooter>
          </Fragment>
        )
      }
    }
  </Mutation>
)
