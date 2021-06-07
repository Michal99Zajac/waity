import React, { useReducer } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { initState, reducer } from './reducer'
import AuthContext from './context/auth-context'
import LoggedRoute from './hoc/logged-route'
import RegisterRoute from './hoc/register-route'

import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import NotFound from './pages/404/not-found'
import UserRegister from './pages/UserRegister/user-register'

import './App.sass'


function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  return (
    <div className="App">
      <AuthContext.Provider value={{
        user: state.user,
        login: (user) => dispatch({ action: 'login', user: user }),
        logout: () => dispatch({ action: 'logout'})
      }}>
        <Router>
          <Switch>
            <LoggedRoute path='/login' component={Login} />
            <LoggedRoute path='/signup' component={Signup} />
            <RegisterRoute path='/user-register' component={UserRegister} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </AuthContext.Provider>
      
    </div>
  )
}

export default App
