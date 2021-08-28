import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from '@pages/Home'
import { Signin } from '@pages/Signin'
import { Signup } from '@pages/Signup'
import { Dashboard } from '@pages/Dashboard'
import { Navbar } from '@organisms/Navbar/Navbar'

const App: React.FC = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/signup' component={Signup} />
      <Route exact path='/dashboard' component={Dashboard} />
    </Switch>
  </Router>
)

export default App
