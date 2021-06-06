import { Redirect, Route } from 'react-router'
import { useAuth } from '../hooks/use-auth'


/**
 * extension for normal Route Element with role check for restaurant
 */
export default function RestaurantRoute(props: any) {
  const [auth] = useAuth()

  if (auth) return <Redirect to='/login' />

  return (auth.role === 'restaurant') ?
    <Route {...props} /> :
    <Redirect to='/home' />
}
