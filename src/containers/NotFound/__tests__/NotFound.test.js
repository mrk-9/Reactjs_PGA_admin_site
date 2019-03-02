import React from 'react'
import { mountWithTheme } from '../../../utils/testutil'
import NotFound from '../'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('NotFound container', () => {
  it('should render correctly', () => {
    const wrapper = mountWithTheme(<NotFound />, theme)
    expect(wrapper).toHaveLength(1)
  })
})
