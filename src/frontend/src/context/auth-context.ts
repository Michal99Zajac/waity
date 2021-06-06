import React from 'react'


/**
 * create context for auth
 */
const AuthContext = React.createContext({
  user: <any>null,
  login: (user: any) => {},
  logout: () => {}
})

export default AuthContext
