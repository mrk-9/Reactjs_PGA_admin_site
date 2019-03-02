import React from 'react'
import { mountWithTheme } from '../../../utils/testutil'
import Dashboard from '../'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Dashboard container', () => {
  it('should render correctly', () => {
    const wrapper = mountWithTheme(<Dashboard />, theme)
    expect(wrapper).toHaveLength(1)
  })
})
