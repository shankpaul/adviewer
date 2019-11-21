import React from "react"
import { Route, Switch } from "react-router-dom"
import Signup from './components/Signup'
import Signin from './components/Signin'
import Dashboard from './components/dashboard'
import {PrivateRoute }from './helpers/private_route'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/signin" component={Signin} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  )
}

export default Routes