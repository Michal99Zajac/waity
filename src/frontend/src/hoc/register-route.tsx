import { Redirect, Route } from 'react-router'
import { useAuth } from '../hooks/use-auth'


/**
 * access to route if user must continue register
 */
export default function RegisterRoute(props: any) {
  const [auth] = useAuth()

  if (auth) return <Redirect to='/home' />

  return (!window.localStorage.getItem('registerUser') && !window.localStorage.getItem('registerRestaurant')) ? 
            <Redirect to='/home' /> : <Route {...props} />
}
