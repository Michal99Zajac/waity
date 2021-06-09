import React, { useReducer, useEffect } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { initState, reducer } from './reducer'
import AuthContext from './context/auth-context'
import LoggedRoute from './hoc/logged-route'
import RegisterRoute from './hoc/register-route'
import { Navbar } from './components/navbar/navbar'

import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import NotFound from './pages/404/not-found'
import UserRegister from './pages/UserRegister/user-register'
import Home from './pages/Home/Home'

import './App.sass'


function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  /**
   * clear data of register user
   */
  useEffect(() => {
    window.localStorage.removeItem('registerUser')
  }, [])

  return (
    <div className="App">
      <AuthContext.Provider value={{
        user: state.user,
        login: (user) => dispatch({ action: 'login', user: user }),
        logout: () => dispatch({ action: 'logout'})
      }}>
        <Router>
          <Navbar client />
          <Switch>
            <Redirect exact from='/' to='/home' />
            <LoggedRoute path='/login' component={Login} />
            <LoggedRoute path='/signup' component={Signup} />
            <RegisterRoute path='/user-register' component={UserRegister} />
            <Route path='/home' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  )
}

export default App
