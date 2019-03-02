import React from 'react'
import { Edit, Delete } from '../'
import { withApollo, mountWithTheme } from '../../../../utils/testutil'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Editable Buttons', () => {
  it('should render edit', () => {
    const wrapper = mountWithTheme(<Edit />, theme)
    expect(wrapper).toHaveLength(1)
  })
  it('should render delete', () => {
    const Render = withApollo(Delete)
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})
