import React from 'react'
import { mountWithTheme } from '../../../utils/testutil'
import Logout from '../'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Logout container', () => {
  it('should render correctly', () => {
    const wrapper = mountWithTheme(<Logout />, theme)
    expect(wrapper).toHaveLength(1)
  })
})
