import React from 'react'
import Cards from '../Cards'
import styled from 'styled-components'

const { Card, CardBody, CardHeader, CardFooter } = Cards

const Head = styled(CardHeader)`
  p, h4 {
    display: inline-block
    padding-right: 5px
  }
`

export default ({ header, footer, style = {}, children }) => (
  <Card style={style}>
    {header &&
      <Head>
        <h2>{header}</h2>
      </Head>}
    <CardBody>
      {children}
    </CardBody>
    {footer &&
      <CardFooter>
        {footer}
      </CardFooter>}
  </Card>
)
