import React from 'react'
import styled from 'styled-components'
import { ModalBody } from './helper'

const Container = styled.div`
  position: absolute
  display: flex
  z-index: 100
  justify-content: center
  align-items: center
  top: 0
  bottom: 0
  left: 0
  right: 0
`

const BackDrop = styled.div`
  position: fixed
  width: 100%
  height: 100%
  background-color: ${({ theme }) => theme.colors.primary.black}
  opacity: 0.6
`

const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.text}
  z-index: 9999
  box-shadow: ${({ theme }) => `0 0 24px 0 ${theme.colors.primary.boxShadow}, 0 24px 24px 0 ${theme.colors.primary.boxShadow2}`};
  border-radius: 2px;
  animation-delay: 0.1s;
`

export default ({ children, hideModal, title }) => (
  <Container>
    <ModalContainer>
      <ModalBody title={title} hideModal={hideModal}>{children}</ModalBody>
    </ModalContainer>
    <BackDrop />
  </Container>
)
