import React from 'react'
import { mountWithTheme } from '../../../utils/testutil'
import Login from '../'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Logout container', () => {
  it('should render correctly', () => {
    const wrapper = mountWithTheme(<Login />, theme)
    expect(wrapper).toHaveLength(1)
  })
})
