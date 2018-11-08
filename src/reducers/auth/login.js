import * as types from '../../constants/actionTypes';

const initialState = {
  isLoginSuccess: false,
  isLoginFail: false,
  user: null,
  error: null
}

const loginIn = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_IN_SUCCESS:
      return {
        ...state,
        isLoginSuccess: true,
        isLoginFail: false,
        user: action.user,
      }
      break;
    case types.LOGIN_IN_ERROR:
      return {
        isLoginSuccess: false,
        isLoginFail: true,
        error: action.error
      }
      break;
    default:
      return state;
  }
}

export default loginIn;