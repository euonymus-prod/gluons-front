import { SET_LOGIN_TOKEN, INIT_LOGIN, EXEC_LOGOUT } from '../constants'

export const setAuthToken = (token) => {
  return {
	  type: SET_LOGIN_TOKEN,
	  payload: token
  }
}

export const refreshLogin = (user) => {
  if (('isActive' in user) && user.isActive) {
    return {
	    type: INIT_LOGIN,
	    payload: user
    }
  }
  // If user is not active, execute logout
  return {
	  type: EXEC_LOGOUT,
	  payload: null
  }
}

export const execLogout = () => {
  return {
	  type: EXEC_LOGOUT,
	  payload: null
  }
}
