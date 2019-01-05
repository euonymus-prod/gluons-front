import { AUTH_TOKEN, LOGGED_IN_USER } from '../constants'

class LoginUtil {
  static logout() {
    localStorage.removeItem(AUTH_TOKEN)
    localStorage.removeItem(LOGGED_IN_USER)
  }

  static saveToken(token) {
    localStorage.setItem(AUTH_TOKEN, token)
  }
  static getToken() {
    return localStorage.getItem(AUTH_TOKEN)
  }

  static saveUser(user) {
		localStorage.setItem(LOGGED_IN_USER, JSON.stringify(user))
  }
  static getUser() {
    return JSON.parse(localStorage.getItem(LOGGED_IN_USER))
  }

  // isAdmin(logged_in_user) {
  // 	  if (!this.isLoggedIn(logged_in_user)) {
  // 	    return false
  // 	  }
  // 	  return (logged_in_user.role === 'admin')
  // }
  // isAuthorized(logged_in_user, quark) {
  // 	  if (!quark || !this.isLoggedIn(logged_in_user)) {
  // 	    return false
  // 	  }
  // 	  if (this.isAdmin(logged_in_user)) {
  // 	    return true
  // 	  }
  // 	  if (logged_in_user.id === quark.user_id) {
  // 	    return true
  // 	  }
  // 	  if (!quark.is_exclusive) {
  // 	    return true
  // 	  }
  // 	  return false
  // }
}
export default LoginUtil
