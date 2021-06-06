import { useContext } from 'react'
import AuthContext from '../context/auth-context'


/**
 * hook for set user to auth
 * 
 * @returns [auth, setAuth] - user and function for manipulation
 */
export function useAuth() {
  const authContext = useContext(AuthContext)

  const auth = authContext.user

  const setAuth = (user: boolean | Object) => {
    if (user) {
      authContext.login(user)
      window.localStorage.setItem('token', JSON.stringify(user))
    } else {
      authContext.logout()
      window.localStorage.removeItem('token')
    }
  }

  return [auth, setAuth]
}
