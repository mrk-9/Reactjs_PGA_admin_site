import React from 'react'
import styled from 'styled-components'
import { FluidContainer } from '../../Layout'

const Container = styled.div`
  display: flex
  justify-content: center
  align-items:center
  top: 45%
  width: 85%
  
  div {
    margin-left: 25px
    margin-top: 5px
    
    h4 {
      font-size: 1.3125rem
      font-weight: 500
    }
    
    p {
      color: ${({ theme }) => theme.colors.gray.gray600}
    }
  }
`

const Title = styled.h1`
  font-weight: 300
  line-height: 1.2
  font-size: 4.5rem
`

export default ({ statusCode, title, message }) => (
  <FluidContainer>
    <Container>
      <Title>{statusCode}</Title>
      <div>
        <h4>{title}</h4>
        <p>{message}</p>
      </div>
    </Container>
  </FluidContainer>
)
