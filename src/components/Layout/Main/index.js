import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import { Loadable } from '../../Elements'
import { Breadcrumbs, BreadcrumbsItem } from '../BreadCrumbs'

const Main = styled.section`
  flex: 1;
  min-height: 100%;
`

const pageMapper = ({ path, name }) => {
  const loader = () => import(`../../../containers/${name}`)
  const Component = Loadable({ loader })
  return { name, path, Component }
}

const componentMapper = ({ name, path, Component }) => {
  if (!path) {
    return (<Route key={name} component={Component} />)
  }
  if (path === '/') {
    return (<Route key={name} exact path={path} component={Component} />)
  }
  return (<Route key={name} path={path} component={Component} />)
}

const pages = [
  {
    path: '/',
    name: 'Dashboard'
  },
  {
    path: '/events',
    name: 'Events'
  },
  {
    path: '/invoices',
    name: 'Invoices'
  },
  {
    path: '/journals',
    name: 'Journals'
  },
  {
    path: '/billing-events',
    name: 'BillingEvents'
  },
  {
    path: '/paymentTypes',
    name: 'PaymentTypes'
  },
  {
    path: '/products',
    name: 'Products'
  },
  {
    path: '/sections',
    name: 'Sections'
  },
  {
    path: '/user',
    name: 'User'
  },
  {
    path: '/logout',
    name: 'Logout'
  },
  {
    path: null,
    name: 'NotFound'
  }
]

const basePages = pages.map(pageMapper)

export default () => (
  <Main>
    <Breadcrumbs>
      <BreadcrumbsItem />
    </Breadcrumbs>
    <Switch>
      {basePages.map(componentMapper)}
    </Switch>
  </Main>
)
