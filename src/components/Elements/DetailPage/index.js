import { Query } from 'react-apollo'
import React from 'react'
import styled from 'styled-components'
import FourOhFour from '../FourOhFour'
import Loading from '@pga/pga-component-library/lib/components/LoadingComponent'
import { FluidContainer } from '../../Layout'
import { renderMap } from './info'
import Cards from '../Cards'
import Toast from '../Toast'
import Buttons from '../Buttons'

const Container = styled.div`
  display: flex
  flex-direction: column
  justify-content: right
  
  span:first-child {
    margin-right: 5px
    font-weight: bold
    text-transform: capitalize
  }
  
  span:first-child::after {
    content: ':'
  }
  
  hr {
    width: 20%
    border: none
    height: 2px
    background-color: ${({ theme: { colors } }) => colors.gray.gray100}
  }
`

const { Card, CardBody, CardHeader } = Cards

const Title = styled.h1`
  float: left;
`

const EditButton = styled(Buttons)`
  float: right;
`

export default ({ query, id, dataKey, updateKey, history }) => (
  <FluidContainer>
    <Query query={query} variables={{ id }} errorPolicy='all'>
      {({ loading, error, data = {} }) => {
        const value = data[dataKey]

        if (error) {
          const message = error.message || 'Error loading data from server'
          return <FourOhFour statusCode={400} title='GraphQL Error' message={message} />
        }
        if (loading) return <Loading />

        return (
          <Card>
            <CardHeader>
              <Title>{value.name}</Title>
              <EditButton onClick={() => history.push(`/${updateKey}/edit`, { id })} color='primary'>Edit</EditButton>
            </CardHeader>
            <CardBody>
              <Container>
                {renderMap(value)}
              </Container>
            </CardBody>
          </Card>
        )
      }}
    </Query>
    <Toast />
  </FluidContainer>
)
