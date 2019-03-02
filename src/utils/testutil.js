import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StaticRouter } from 'react-router-dom'
import { shallow, mount } from 'enzyme'
import { MockedProvider } from 'react-apollo/test-utils'

export const shallowWithTheme = (tree, theme) => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext()
  return shallow(tree, { context })
}

export const mountWithTheme = (tree, theme) => {
  const context = shallow(<ThemeProvider theme={theme} />)
    .instance()
    .getChildContext()

  return mount(tree, {
    context,
    childContextTypes: ThemeProvider.childContextTypes
  })
}

export const withRouter = (Component, props, context = {}) => <StaticRouter context={context}><Component {...props} /></StaticRouter>

export const withApollo = (Component, props, mocks = []) => <MockedProvider mocks={mocks}><Component {...props} /></MockedProvider>
