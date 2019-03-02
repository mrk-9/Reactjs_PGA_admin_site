import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import 'font-awesome/css/font-awesome.css'
import './index.css'
import theme from './theme'
import App from './App'
import apolloClient from './apolloClient'
import { AuthProvider } from '@pga/auth-provider'

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <AuthProvider apolloClient={apolloClient}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)
