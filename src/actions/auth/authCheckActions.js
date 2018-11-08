'use strict'
import * as types from '../../constants/actionTypes';
import storageUtil from '../../utils/storageUtil';
export function authCheck() {
  return dispatch => {
    dispatch(authCheckDoing());
    storageUtil.getItem('authData')
      .then((authDataStr) => {
        if (undefined == authDataStr || authDataStr == null) {
          dispatch(authCheckError("请先登录"));
        } else {
          let authData = JSON.parse(authDataStr);
          if (!authData.auth_token || !authData.timestamp) {
            dispatch(authCheckError("Token无效"));
          }
          var authTime = Date.parse(new Date(authData.timestamp));
          var currTime = Date.parse(new Date());
          if ((authTime + parseFloat(authData.expires_in) * 1000) - currTime < 3600 * 1000) {
            dispatch(authCheckError("Token已过期"));
          } else {
            dispatch(authCheckSuccess());
          }
        }
      })
      .catch((err) => {
        dispatch(authCheckError("Token无效"));
      });
  // fetch('https://www.baidu.com')
  // .then((res)=>{
  //     dispatch(authCheckError("请先登录"));
  //    // dispatch(authCheckSuccess());
  // }).catch((e)=>{
  //     dispatch(authCheckError("授权失败"));
  // })
  }
}
function authCheckDoing() {
  return {
    type: types.AUTH_CHECK_DOING
  };
}
function authCheckSuccess() {
  return {
    type: types.AUTH_CHECK_SUCCESS
  };
}
function authCheckError(message) {
  return {
    type: types.AUTH_CHECK_ERROR,
    msg: message
  };
}