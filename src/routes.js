import React from "react"
import { Route, Switch } from "react-router-dom"
import Signup from './components/Signup'
import Signin from './components/Signin'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </div>
  )
}

export default Routes