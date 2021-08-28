import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { Home } from './components/pages/Home'
import { Signin } from './components/pages/Signin'
import { Signup } from './components/pages/Signup'
import { Dashboard } from './components/pages/Dashboard'

function App() {
  return (
    <Router>
      <div>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/signin'>Signin</Link>
        </div>
        <div>
          <Link to='/signup'>Signup</Link>
        </div>
        <div>
          <Link to='/dashboard'>Dashboard</Link>
        </div>
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default App
