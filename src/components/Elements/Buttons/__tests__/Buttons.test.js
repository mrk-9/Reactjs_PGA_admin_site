import React from 'react'
import { mountWithTheme } from '../../../../utils/testutil'
import Buttons from '../'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Buttons Component', () => {
  it('should render correctly', () => {
    const wrapper = mountWithTheme(<Buttons />, theme)
    wrapper.setProps({ color: '#fff' })
    expect(wrapper).toHaveLength(1)
  })
})
