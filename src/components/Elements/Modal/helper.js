import { FaIcon } from '../Icons'
import React from 'react'
import styled from 'styled-components'
import Cards from '../Cards'

const { Card, CardHeader } = Cards

const CardWrapper = styled(Card)`
  margin-bottom: 0px
`

const Close = styled.a`
  float: right
  
  i {
    font-size: 20px
  }
`

const Title = styled.h3`
  float: left
`

export const ModalBody = ({ hideModal, title, children }) => (
  <CardWrapper>
    <CardHeader>
      <Title>{title}</Title>
      <Close onClick={hideModal}><FaIcon icon='close' /></Close>
    </CardHeader>
    {children}
  </CardWrapper>
)
