import React from 'react'
import { mountWithTheme, withApollo, withRouter } from '../../../utils/testutil'
import Products from '../'
import ProductDetail from '../productDetail'
import ProductLanding, { handleRowSelection } from '../productLanding'
import ProductCreate from '../productCreate'
import ProductUpdate from '../productUpdate'

import { productColumn } from '../helpers'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Products container', () => {
  it('should render correctly', () => {
    const Render = withRouter(() => withApollo(Products))
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Product Landing component', () => {
  it('should render correctly', () => {
    const Render = withRouter(() => withApollo(ProductLanding))
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })

  it('should run handleRowSelection', () => {
    const handleRow = handleRowSelection({ history: { push: jest.fn() } })('', { id: '' })
    expect(handleRow).toBe(undefined)
  })
})

describe('Product Detail component', () => {
  it('should render correctly', () => {
    const RenderApollo = () => withRouter(() => <ProductDetail match={{ params: {} }} />)
    const Render = withApollo(RenderApollo)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Product Create component', () => {
  it('should render correctly', () => {
    const RenderApollo = () => withRouter((props) => <ProductCreate {...props} />)
    const Render = withApollo(RenderApollo)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Product Update component', () => {
  it('should render correctly', () => {
    const RenderApollo = () => withRouter((props) => <ProductUpdate location={{ state: {} }} {...props} />)
    const Render = withApollo(RenderApollo)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('Product Helpers', () => {
  it('product column should be array', () => {
    expect(productColumn).toHaveLength(5)
  })
})
