import { SET_LOGIN_TOKEN, EXEC_LOGOUT } from '../constants'
import LoginUtil from '../utils/LoginUtil'

const initState = null
export default (state = initState, action) => {
  switch(action.type) {
    case SET_LOGIN_TOKEN :
      LoginUtil.saveToken(action.payload)
	    return action.payload;

    case EXEC_LOGOUT :
      LoginUtil.logout()
      return initState

    default :
	    // NOTE: I don't know why, but if you return 'state' directly, main_quark's current_quark blinks when you visit it from the toppage.
      return LoginUtil.getToken()
  }
}
