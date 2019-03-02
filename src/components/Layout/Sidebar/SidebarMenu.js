import React from 'react'
import styled from 'styled-components'
import SidebarMenuItem from './SidebarMenuItem'

const SidebarLinksContainer = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`

const SidebarMenu = styled.nav`
  width: 100%;
  position: sticky;
  overflow-y: auto;
  top: 55px;
  height: calc(100vh - 55px);
`

const menuItems = [
  {
    icon: 'tachometer',
    label: 'Dashboard',
    to: '/'
  }, {
    icon: 'calendar',
    label: 'Events',
    to: '/events'
  }, {
    icon: 'file-text-o',
    label: 'Invoices',
    to: '/invoices'
  }, {
    icon: 'briefcase',
    label: 'Products',
    to: '/products'
  }, {
    icon: 'credit-card',
    label: 'Payment Types',
    to: '/paymentTypes'
  }, {
    icon: 'object-group',
    label: 'Sections',
    to: '/sections'
  }, {
    icon: 'file-text-o',
    label: 'Billing Events',
    to: '/billing-events'
  }, {
    icon: 'file-text-o',
    label: 'Journals',
    to: '/journals'
  }
]

export default() => (
  <SidebarMenu>
    <SidebarLinksContainer>
      {menuItems.map(options => (
        <SidebarMenuItem key={options.label} {...options} />
      ))}
    </SidebarLinksContainer>
  </SidebarMenu>
)
