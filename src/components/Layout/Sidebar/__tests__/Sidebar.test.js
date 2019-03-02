import React from 'react'
import { withRouter, mountWithTheme } from '../../../../utils/testutil'
import Sidebar from '../'
import SidebarMenu from '../SidebarMenu'
import SidebarMenuItem from '../SidebarMenuItem'

const theme = {
  colors: {
    white: '',
    gray: {},
    primary: {}
  }
}

describe('Sidebar page', () => {
  it('should render sidebar menu', () => {
    const Render = () => withRouter(Sidebar)
    const wrapper = mountWithTheme(<Render />, theme)
    expect(wrapper.find(SidebarMenu)).toHaveLength(1)
  })

  it('should render sidebar menu with menu items', () => {
    const Render = () => withRouter(SidebarMenu)
    const wrapper = mountWithTheme(<Render />, theme)
    expect(wrapper.find(SidebarMenuItem)).toHaveLength(8)
    expect(wrapper.find(SidebarMenuItem).get(0)).toHaveProperty('props.label', 'Dashboard')
  })
})
