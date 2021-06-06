import React from 'react'


/**
 * create context for auth
 */
const AuthContext = React.createContext({
  user: null,
  login: () => {},
  logout: () => {}
})

export default AuthContext
