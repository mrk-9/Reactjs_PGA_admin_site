import React from 'react'
import { mountWithTheme, withApollo, withRouter } from '../../../utils/testutil'
import PaymentTypes from '../'
import PaymentTypesLanding, { handleRowSelection } from '../paymentTypeLanding'
import PaymentTypesDetail from '../paymentTypeDetail'
import PaymentTypesCreate from '../paymentTypeCreate'
import { paymentTypeColumn } from '../helpers'
import PaymentTypesUpdate from '../paymentTypeUpdate'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('PaymentTypes container', () => {
  it('should render correctly', () => {
    const wrapper = mountWithTheme(withRouter(() => withApollo(PaymentTypes)), theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('PaymentTypes Landing component', () => {
  it('should render correctly', () => {
    const Render = withRouter(() => withApollo(PaymentTypesLanding))
    const wrapper = mountWithTheme(Render, theme)
    const handleRow = handleRowSelection({ history: { push: jest.fn() } })('', { id: '' })
    expect(handleRow).toBe(undefined)
    expect(wrapper).toHaveLength(1)
  })
})

describe('PaymentTypes Detail component', () => {
  it('should render correctly', () => {
    const RenderApollo = () => withRouter(() => <PaymentTypesDetail match={{ params: {} }} />)
    const Render = withApollo(RenderApollo)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('PaymentTypes Create component', () => {
  it('should render correctly', () => {
    const RenderApollo = () => withRouter((props) => <PaymentTypesCreate {...props} />)
    const Render = withApollo(RenderApollo)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('PaymentTypes Update component', () => {
  it('should render correctly', () => {
    const RenderApollo = () => withRouter((props) => <PaymentTypesUpdate location={{ state: {} }} {...props} />)
    const Render = withApollo(RenderApollo)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Events Helpers', () => {
  it('product column should be array', () => {
    expect(paymentTypeColumn).toHaveLength(6)
  })
})
