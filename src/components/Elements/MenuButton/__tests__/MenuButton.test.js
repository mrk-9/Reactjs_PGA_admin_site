import React from 'react'
import MenuButton from '../'
import { mountWithTheme } from '../../../../utils/testutil'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('MenuButton Component', () => {
  it('should render correctly', () => {
    const Render = <MenuButton />
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})
