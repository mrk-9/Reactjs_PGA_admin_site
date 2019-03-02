import React from 'react'
import { Switch } from 'react-router-dom'
import { componentMapper } from '../../utils/common'
import { Loadable } from '../../components/Elements'

export const pageMapper = ({ path, name, basePath }) => {
  const loader = () => import(`${basePath}${name}`)
  const Component = Loadable({ loader })
  return { name, path, Component }
}

const pages = [
  {
    path: '/events/create',
    name: 'eventsCreate',
    basePath: './',
    isExact: true
  },
  {
    path: '/events/edit',
    name: 'eventsUpdate',
    basePath: './',
    isExact: true
  },
  {
    path: '/events/:eventId',
    name: 'eventsDetail',
    basePath: './',
    isExact: false
  },
  {
    path: '/events',
    name: 'eventsLanding',
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
