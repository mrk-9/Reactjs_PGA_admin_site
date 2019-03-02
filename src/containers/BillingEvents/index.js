import React from 'react'
import { Switch } from 'react-router-dom'
import { componentMapper } from '../../utils/common'
import { Loadable } from '../../components/Elements'

const pageMapper = ({ path, name, basePath }) => {
  const loader = () => import(`${basePath}${name}`)
  const Component = Loadable({ loader })
  return { name, path, Component }
}

const pages = [
  {
    path: '/billing-events/edit',
    name: 'billingEventUpdate',
    basePath: './',
    isExact: true
  },
  {
    path: '/billing-events/:billingEventId',
    name: 'billingEventDetail',
    basePath: './',
    isExact: false
  },
  {
    path: '/billing-events',
    name: 'billingEventLanding',
    basePath: './',
    isExact: true
  }
]

const basePages = pages.map(pageMapper)

export default () => (
  <Switch>
    {basePages.map(componentMapper)}
  </Switch>
)
