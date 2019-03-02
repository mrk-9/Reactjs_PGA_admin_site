import React from 'react'
import styled from 'styled-components'
import { withAuthProvider } from '@pga/auth-provider'
import { FluidContainer } from '../../components/Layout'
import { Cards, ProfileImage } from '../../components/Elements'
import { formatCamelCase } from '../../utils/common'

const Title = styled.h1`
  float: left
`
const Item = styled.p`
  span:first-child {
    text-transform: capitalize
    font-weight: bold
    margin-right: 10px
  }
`

const { Card, CardBody, CardHeader } = Cards

export const renderItem = (me) => Object.keys(me)
  .filter(item => item !== '__typename' && item !== 'photo')
  .map(item => (
    <Item key={item}>
      <span>{formatCamelCase(item)}:</span>
      <span>{me[item]}</span>
    </Item>
  ))

export default withAuthProvider(({ me }) => (
  <FluidContainer>
    <Card>
      <CardHeader>
        <Title>User Profile</Title>
      </CardHeader>
      <CardBody>
        <p>
          {
            me.photo && <ProfileImage alt={me.firstName} src={me.photo} />
          }
        </p>
        {
          renderItem(me)
        }
      </CardBody>
    </Card>
  </FluidContainer>
))
