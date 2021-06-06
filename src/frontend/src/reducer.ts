/**
 * reducer for user operation
 */
export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'login':
      return {...state, user: action.user}
    case 'logout':
      return {...state, user: null}
    default:
      return Error(`Action ${action.type} Not Found`)
  }
}

const user = window.localStorage.getItem('token')

/**
 * init state of user
 */
export const initState = {
  user: user ? JSON.parse(user) : null
}
