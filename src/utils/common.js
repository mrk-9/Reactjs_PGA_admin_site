import React from 'react'
import { Route } from 'react-router-dom'

export const componentMapper = ({ name, path, Component, isExact }) => {
  if (!path) {
    return (<Route key={name} component={Component} />)
  }
  if (path === '/') {
    return (<Route key={name} exact path={path} component={Component} />)
  }
  return (<Route key={name} exact={isExact} path={path} component={Component} />)
}

export const formatCamelCase = name => name.split(/(?=[A-Z])/).join(' ')

export const formatDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }
  return new Date(date).toLocaleDateString('en-US', options)
}

export const formatDateExceptTime = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  options.timeZone = 'UTC';
  return new Date(date).toLocaleDateString('en-US', options)
}

export const renderImage = (Component, url) => <Component src={url} />

export const renderEmail = email => <a href={`mailto:${email}`}>{email}</a>

export const imgSrc = src => src.replace(/^http:/, 'https:')
