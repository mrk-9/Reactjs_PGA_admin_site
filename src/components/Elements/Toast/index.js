import React from 'react'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Message = styled.div`
  text-transform: capitalize
`

export const notify = ({ type, message, timeout = 3000, close }) => toast[type](<Message>{message}</Message>, {
  position: toast.POSITION.TOP_CENTER,
  autoClose: timeout,
  onClose: close
})

export const notifyWithUpdate = ({ message }) => toast.info(<Message>{message}</Message>, {
  position: toast.POSITION.TOP_CENTER,
  autoClose: false
})

export const updateNotify = (toastId, { message, type, close = null, timeout = 3000 }) => toast.update(toastId, {
  render: <Message>{message}</Message>,
  type: toast.TYPE[type],
  autoClose: timeout,
  onClose: close
})

export const updateErrorNotify = (toastId, Error) => toast.update(toastId, {
  render: <Message><Error /></Message>,
  type: toast.TYPE.ERROR,
  autoClose: false,
  closeOnClick: false
})

export const errorNotify = (Error) => toast.error(<Message><Error /></Message>, {
  position: toast.POSITION.TOP_CENTER,
  autoClose: false,
  closeOnClick: false
})

export default (props) => (
  <ToastContainer {...props} />
)
