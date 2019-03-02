import styled from 'styled-components'
import React from 'react'

export const Wrapper = styled.div`
  margin-bottom: 1rem;
`

const Container = styled.div`
  span {
    font-weight: bold;
  }
`

export const Display = ({ label, msg }) => (
  <Container>
    <span>
      {label}
    </span>
    <p>{msg}</p>
  </Container>
)
