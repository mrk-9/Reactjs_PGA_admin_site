import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute, withAuthProvider } from '@pga/auth-provider'
import { AdminPanel } from './components/Layout'

const Public = (props) => {
  return (
    <ul>
      <li>Bar {props.bar}</li>
      <li>isLoggedIn: {props.isLoggedIn ? 'yes' : 'no'}</li>
      <li>authReady: {props.authReady ? 'yes' : 'no'}</li>
      <li>user: {props.user && props.user.toString()}</li>
    </ul>
  )
}

const WrappedComponent = withAuthProvider((props) => <Public bar='baz' {...props} />)

export default () => (
  <Switch>
    <Route exact path='/public' component={WrappedComponent} />
    <PrivateRoute component={AdminPanel} />
  </Switch>
)
