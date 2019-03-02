import React from 'react'
import styled from 'styled-components'
import { FluidContainer, Row } from '../../Layout'
import LogoLoader from '../LogoLoader'

const LoginWrapper = styled.div`
  min-height: 100vh;
  flex-direction: row;
  align-items: center;
  display: flex;
`

const LoginRow = styled(Row)`
  justify-content: center;
`

export default () => (
  <LoginWrapper>
    <FluidContainer>
      <LoginRow>
        <LogoLoader />
      </LoginRow>
    </FluidContainer>
  </LoginWrapper>
)
