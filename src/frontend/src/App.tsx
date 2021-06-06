import React, { useEffect, useReducer, useState } from 'react'
import { initState, reducer } from './reducer'
import AuthContext from './context/auth-context'
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

      </AuthContext.Provider>
      
    </div>
  )
}

export default App
