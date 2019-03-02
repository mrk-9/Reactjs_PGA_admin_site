import React from 'react'
import { mountWithTheme } from '../../../../utils/testutil'
import FourOhFour from '../'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Error Component', () => {
  it('should render correctly', () => {
    const Render = (<FourOhFour />)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})
