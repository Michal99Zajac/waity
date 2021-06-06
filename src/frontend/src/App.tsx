import React, { useReducer } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { initState, reducer } from './reducer'
import AuthContext from './context/auth-context'
import Login from './pages/Login/Login'
import LoggedRoute from './hoc/logged-route'
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
          </Switch>
        </Router>
      </AuthContext.Provider>
      
    </div>
  )
}

export default App
