import React from 'react'
import { Query } from 'react-apollo'
import styled from 'styled-components'
import Loading from '@pga/pga-component-library/lib/components/LoadingComponent'
import { FluidContainer } from '../../components/Layout'
import { Cards, Tables, FourOhFour } from '../../components/Elements'
import { InfoBlock, itemColumn } from './helpers'
import { InvoiceQueries } from '../../queries'
import { pathOr, compose } from 'ramda'
import { paymentColumn } from './helpers/columns'

const { Card, CardBody, CardHeader } = Cards
const { Table } = Tables
const { invoiceDetail } = InvoiceQueries

const Head = styled(CardHeader)`
  p, h4 {
    display: inline-block;
    padding-right: 5px;
  }

  h4::before {
    content: '#';
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: row;
  div {
    flex-basis: 100%;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const fromFilters = ['partner', 'partnerSection']
const totalFilters = ['total', 'subtotal', 'tax']
const detailFilters = ['date', 'createdAt', 'invoiceUrl', 'invoiceNumber']

export const formatItems = items =>
  items.map((item, idx) => {
    const index = idx + 1
    const name = item.name || `item-${index}`
    return { ...item, name, index }
  })

const getPayments = pathOr([], ['payments'])
export const transformPayments = (payments = []) =>
  payments.map((item, idx) => ({
    index: idx + 1,
    transactionNumber: pathOr('N/A', ['transactionNumber'], item),
    section: pathOr('N/A', ['type', 'section', 'name'], item),
    clearingAccount: pathOr('N/A', ['type', 'ledgerId'], item),
    type: pathOr('N/A', ['type', 'name'], item),
    amount: pathOr('N/A', ['amount'], item)
  }))
const getPaymentItems = compose(transformPayments, getPayments)

const formattedFromSection = data => [
  { name: 'partner', value: pathOr('N/A', ['createdBy', 'displayName'], data) },
  { name: 'partnerSection', value: pathOr('N/A', ['createdBy', 'section', 'name'], data) }
]

export default (props) => {
  const id = window.atob(pathOr('', ['match', 'params', 'invoiceId'], props))
  const handleProductSelection = row => {props.history.push(`/products/${row["product.id"]}`)}
  return (
    <Query query={invoiceDetail} variables={{id}}>
      {({ loading, error, data: { invoice } = {} }) => {
        if (error) {
          return <FourOhFour />
        }
        if (loading) {
          return <Loading />
        }

        const { items, ...rest } = invoice
        const formattedItems = formatItems(items)
        const formattedInvoice = Object.keys(rest).map(item => ({ name: item, value: rest[item] }))
        const paymentItems = getPaymentItems(rest)
        return (
          <FluidContainer>
            <Card>
              <Head>
                <p>Invoice </p><h4>{rest.invoiceNumber}</h4>
              </Head>
              <CardBody>
                <Container>
                  <InfoBlock data={formattedFromSection(rest)} filters={fromFilters} title='From' />
                  <InfoBlock data={formattedInvoice} filters={detailFilters} title='Details' />
                </Container>
                <Wrapper>
                  <Table data={formattedItems} columns={itemColumn} onSelectRow={handleProductSelection} />
                  <InfoBlock data={formattedInvoice} filters={totalFilters} isBottom />
                  {!!paymentItems.length && <Table data={paymentItems} columns={paymentColumn} />}
                </Wrapper>
              </CardBody>
            </Card>
          </FluidContainer>
        )
      }}
    </Query>
  );  
}
