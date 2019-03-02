import React from 'react'
import { mountWithTheme, withRouter } from '../../../../utils/testutil'
import Header from '../'
import Menu from '../menu'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

const props = {
  me: {
    photo: ''
  }
}

describe('Header', () => {
  it('should render header', () => {
    const Render = () => withRouter(() => <Header {...props} />)
    const wrapper = mountWithTheme(<Render />, theme)
    expect(wrapper).toHaveLength(1)
  })

  it('should render menu', () => {
    const Render = () => withRouter(() => <Menu {...props} />)
    const wrapper = mountWithTheme(<Render />, theme)
    expect(wrapper).toHaveLength(1)
  })
})
