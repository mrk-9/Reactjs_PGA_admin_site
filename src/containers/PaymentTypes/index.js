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
    path: '/paymentTypes/create',
    name: 'paymentTypeCreate',
    basePath: './',
    isExact: true
  },
  {
    path: '/paymentTypes/edit',
    name: 'paymentTypeUpdate',
    basePath: './',
    isExact: true
  },
  {
    path: '/paymentTypes/:paymentTypeId',
    name: 'paymentTypeDetail',
    basePath: './',
    isExact: false
  },
  {
    path: '/paymentTypes',
    name: 'paymentTypeLanding',
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
