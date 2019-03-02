import React from 'react'
import { withRouter, mountWithTheme } from '../../../../utils/testutil'
import Main from '../'
import { Breadcrumbs, BreadcrumbsItem } from '../../BreadCrumbs'
import Dashboard from '../../../../containers/Dashboard'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Main page', () => {
  it('should render breadcrumbs and breadcrumbs items', () => {
    const Render = () => withRouter(Main)
    const wrapper = mountWithTheme(<Render />, theme)
    expect(wrapper.find(Breadcrumbs)).toHaveLength(1)
    expect(wrapper.find(BreadcrumbsItem)).toHaveLength(1)
  })

  it('should render the dashboard page', () => {
    const Render = () => withRouter(Main)
    const wrapper = mountWithTheme(<Render />, theme)
    expect(wrapper.find(Dashboard)).toHaveLength(1)
  })
})
