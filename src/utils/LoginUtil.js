import { AUTH_TOKEN } from '../constants'

class LoginUtil {
  static login(token) {
    localStorage.setItem(AUTH_TOKEN, token)
  }
  static logout() {
    localStorage.removeItem(AUTH_TOKEN)
  }
  static getToken() {
    return localStorage.getItem(AUTH_TOKEN)
  }
  static isLoggedIn() {
    const token = LoginUtil.getToken()
    return token ? true : false
  }

  // isLoggedIn(logged_in_user) {
  // 	  return (logged_in_user && logged_in_user.status && logged_in_user.status === 1);
  // }
  // isAdmin(logged_in_user) {
  // 	  if (!this.isLoggedIn(logged_in_user)) {
  // 	    return false;
  // 	  }
  // 	  return (logged_in_user.role === 'admin');
  // }
  // isAuthorized(logged_in_user, quark) {
  // 	  if (!quark || !this.isLoggedIn(logged_in_user)) {
  // 	    return false;
  // 	  }
  // 	  if (this.isAdmin(logged_in_user)) {
  // 	    return true;
  // 	  }
  // 	  if (logged_in_user.id === quark.user_id) {
  // 	    return true;
  // 	  }
  // 	  if (!quark.is_exclusive) {
  // 	    return true;
  // 	  }
  // 	  return false;
  // }
}
export default LoginUtil;
