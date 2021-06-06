import { Redirect, Route } from 'react-router'
import { useAuth } from '../hooks/use-auth'


/**
 * logged route for page where logged user have limited access
 */
export default function LoggedRoute(props: any) {
  const [auth] = useAuth()

  return auth ? <Redirect to='/home' /> : <Route {...props} />
}
