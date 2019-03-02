import React from 'react'
import Modal from '../Modal'
import DeletePage from './helper'

export default ({ title, mutation, refetch }) => {
  const DeleteModalPage = (props) => <DeletePage mutation={mutation} refetch={refetch} {...props} />
  return <Modal render={DeleteModalPage} title={title} />
}
