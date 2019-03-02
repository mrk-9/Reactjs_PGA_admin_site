import React from 'react'
import { shallow } from 'enzyme'
import { mountWithTheme, withApollo, withRouter } from '../../../utils/testutil'
import Invoices from '../'
import InvoiceDetail, { formatItems, transformPayments } from '../invoiceDetail'
import InvoiceLanding, { handleRowSelection } from '../invoiceLanding'
import { InfoBlock } from '../helpers'
import { formatData, formatValue, formatTitle } from '../helpers/info'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Invoices container', () => {
  it('should render correctly', () => {
    const Render = withRouter(() => withApollo(Invoices))
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Invoice Landing component', () => {
  it('should render correctly', () => {
    const props = {
      title: 'Invoices',
      titleKey: 'Invoice Name',
      columns: [],
      dataKey: 'invoices',
      tableLimitSize: 10,
      onSelectRow: jest.fn(),
      hasCreate: true
    }
    const handleRow = handleRowSelection({ history: { push: jest.fn() } })('', { id: '' })
    const Render = withRouter(() => withApollo(InvoiceLanding), props)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
    expect(handleRow).toBe(undefined)
  })
})

describe('Invoice Detail component', () => {
  it('should render correctly', () => {
    const props = {
      location: {
        state: {}
      }
    }
    const Render = withRouter(() => withApollo(InvoiceDetail, props))
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })

  it('should get formatted items', () => {
    const test = [{ name: 'test' }]
    const formattedItem = formatItems(test)
    expect(formattedItem).toEqual([{ name: 'test', index: 1 }])
  })
})

describe('Info component', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<InfoBlock />)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Invoice Helpers', () => {
  it('should format data correctly', () => {
    const data = [
      {
        name: 'createdBy',
        value: {
          address: {
            address1: '100 test street'
          },
          firstName: 'John',
          lastName: 'Doe'
        }
      }
    ]

    const result = [
      { name: 'address', value: ' 100 test street' },
      { name: 'firstName', value: 'John' },
      { name: 'lastName', value: 'Doe' }
    ]

    expect(formatData(data)).toEqual(result)
  })
})

describe('TransformPayments', () => {
  it('should format empty data corrrectly', () => {
    const data = []
    const result = []
    expect(transformPayments(data)).toEqual(result)
  })
  it('should format data corrrectly', () => {
    const data = [
      {
        amount: '72.45',
        transactionNumber: '40156413903',
        type: {
          id: 'eb1dca36-0717-4f21-9f6c-f6d3edc05715',
          name: 'Payment/Cash/Paypal',
          section: {
            id: 'PGA'
          },
          ledgerId: '300000002086241'
        }
      }
    ]

    const result = [
      {
        amount: '72.45',
        clearingAccount: '300000002086241',
        index: 1,
        section: 'N/A',
        transactionNumber: '40156413903',
        type: 'Payment/Cash/Paypal'
      }
    ]

    expect(transformPayments(data)).toEqual(result)
  })
})

describe('formatValue helper', () => {
  it('should return custom value for createdAt', () => {
    const data = { name: 'createdAt', value: 'Oct 03, 2018' }
    const result = 'October 3, 2018, 12:00:00 AM'
    expect(formatValue(data)).toEqual(result)
  })

  it('should return custom value for invoiceUrl', () => {
    const data = { name: 'invoiceUrl', value: 'http://pga.org' }
    const result = <a href='http://pga.org' rel='noopener noreferrer' target='_blank'>{data.value}</a>
    expect(formatValue(data)).toEqual(result)
  })

  it('should return N/A value for null invoiceUrl', () => {
    const data = { name: 'invoiceUrl', value: null }
    const result = 'N/A'
    expect(formatValue(data)).toEqual(result)
  })

  it('should return value', () => {
    const data = { name: 'demo', value: 'value' }
    const result = 'value'
    expect(formatValue(data)).toEqual(result)
  })

  it('should return date', () => {
    const data = { name: 'date', value: 'Oct 03, 2018' }
    const result = 'October 3, 2018'
    expect(formatValue(data)).toEqual(result)
  })
})

describe('formatTitle helper', () => {
  it('should return custom value for createdAt', () => {
    const data = { name: 'createdAt', value: 'Oct 03, 2018' }
    const result = 'Reported Date'
    expect(formatTitle(data)).toEqual(result)
  })

  it('should return custom value for date', () => {
    const data = { name: 'date', value: 'Oct 03, 2018' }
    const result = 'Transaction Date'
    expect(formatTitle(data)).toEqual(result)
  })
})
