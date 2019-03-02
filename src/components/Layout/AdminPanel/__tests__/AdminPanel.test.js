import React from 'react'
import { shallowWithTheme, withRouter } from '../../../../utils/testutil'
import AdminPanel from '../'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('AdminPanel', () => {
  it('should render admin panel', () => {
    const Render = withRouter(() => <AdminPanel />)
    const wrapper = shallowWithTheme(Render, theme)
    expect(wrapper).toHaveLength(1)
  })
})
