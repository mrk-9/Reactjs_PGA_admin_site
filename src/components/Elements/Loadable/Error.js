import { Button } from '../index'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex
  flex-direction: column
  position: absolute
  top: 15%
  left: 15%
  
  h1 {
    font-size: 24px
  }
  div {
    div {
      display: flex
      p {
        margin-top: 8px
        font-size: 16px
      }
      span {
        font-size: 2em
        margin-right: 5px
      }
    }
  }
`

export default ({ retry }) => (
  <Container>
    <h1>Error</h1>
    <div>
      <div>
        <span role='img' aria-label='pensive face'>😔</span>
        <p>Oops! Page failed to load</p>
      </div>
      <Button color='primary' size='large' onClick={retry}>Retry</Button>
    </div>
  </Container>
)
