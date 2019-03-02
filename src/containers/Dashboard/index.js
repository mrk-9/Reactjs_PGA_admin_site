import React from 'react'
import styled from 'styled-components'
import { FluidContainer } from '../../components/Layout'
import { Cards } from '../../components/Elements'

const { CardHeader, CardBody, Card } = Cards

const Tag = styled.p`
  font-size: 16px
`

export default () => (
  <FluidContainer>
    <Card>
      <CardHeader>
        <h1>Welcome to the PGA.org Admin</h1>
      </CardHeader>
      <CardBody>
        <Tag>Browse the data we're currently storing by using the navigation on the left</Tag>
      </CardBody>
    </Card>
  </FluidContainer>
)
