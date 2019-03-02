import React from 'react'
import { mountWithTheme, withRouter } from '../../../../utils/testutil'
import { Breadcrumbs, BreadcrumbsItem } from '../'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Breadcrumbs', () => {
  it('should render breadcrumb items', () => {
    const Render = () => withRouter(Breadcrumbs)
    const wrapper = mountWithTheme(<Render />, theme)
    expect(wrapper.find(BreadcrumbsItem)).toHaveLength(1)
  })

  it('should render breadcrumbs with prop title', () => {
    const Render = () => withRouter(Breadcrumbs)
    const wrapper = mountWithTheme(<Render />, theme)
    expect(wrapper.find(BreadcrumbsItem).props()).hasOwnProperty('title')
  })

  it('should render base breadcrumb: home', () => {
    const Render = () => withRouter(Breadcrumbs)
    const wrapper = mountWithTheme(<Render />, theme)
    expect(wrapper.find('li').html()).toContain('home')
  })
})
