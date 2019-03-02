import React from 'react'
import { mountWithTheme, withRouter } from '../../../utils/testutil'
import User from '../'
import UserProfile, { renderItem } from '../userProfile'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

const props = {
  me: {
    name: 'test'
  }
}

describe('User container', () => {
  it('should render correctly', () => {
    const wrapper = mountWithTheme(withRouter(() => <User />), theme)
    expect(wrapper).toHaveLength(1)
  })
})

describe('User Profile page', () => {
  it('should render correctly', () => {
    const wrapper = mountWithTheme(withRouter(() => <UserProfile {...props} />), theme)
    expect(wrapper).toHaveLength(1)
  })
  it('should render correctly', () => {
    const items = renderItem(props)
    const Render = <div>{items[0][0]}</div>
    const wrapper = mountWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})
