import { Redirect, Route } from 'react-router'
import { useAuth } from '../hooks/use-auth'


/**
 * access to route if user must continue register
 */
export default function LoggedRoute(props: any) {
  const [auth] = useAuth()

  if (auth) return <Redirect to='/home' />

  return !window.localStorage.getItem('registerUser') ? <Redirect to='/home' /> : <Route {...props} />
}
