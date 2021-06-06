import { Redirect, Route } from 'react-router'
import { useAuth } from '../hooks/use-auth'


/**
 * extension for normal Route Element with role check for normal user
 */
export default function ClientRoute(props: any) {
  const [auth] = useAuth()

  if (!auth) return <Redirect to='/login' />

  return auth.roles.includes('client') ?
    <Route {...props} /> :
    <Redirect to='/home' />
}
