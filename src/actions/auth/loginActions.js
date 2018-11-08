'use strict'
import { Alert } from 'react-native';

import * as types from '../../constants/actionTypes';
import { fetchPostWithLoading, fetchPost } from '../../common/fetchHelper';
import { loginMethod, authTokenMethod } from '../../constants/apiMethod';
import DateTimeUtil from '../../utils/dateTimeUtil';
import CryptoJSUtils from "../../utils/cryptojsUtil";
import { appKey, appSecret, signKey } from '../../constants/baseConfig';
import loadingAction from '../base/loadingAction';
import storageUtil from '../../utils/storageUtil';
import * as comlib from '../../common/commonlib.js';


export function login(cname, uname, upass) {

  return dispatch => {
    var p = new Promise(function(resolve, reject) {
        dispatch(loadingAction.isLoading());
        resolve({
          cname: cname,
          uname: uname,
          upass: upass
        });
      })
      .then(getAuthCode)
      .then(getAuthToken)
      .then(saveAuthToken)
      .then(() => {
        dispatch(loadingAction.isLoadDone());
      })
      .catch((err) => {
        dispatch(loadingAction.isLoadDone());
        dispatch(loginError(err));
      })
  }
}

function getAuthCode(reqData) {
  return new Promise(function(resolve, reject) {
    var authCodeParams = buildAuthCodeParams(reqData.cname, reqData.uname, reqData.upass);
    fetchPost(loginMethod, authCodeParams)
      .then((res) => {
        if (res.iserror) {
          reject(comlib.error.newError("获取授权Code失败", "res.errormessage"));
        } else {
          resolve(res.response.authcode);
        }
      }).catch((err) => {
        reject(comlib.error.newError("获取授权Code失败", err.message));
      })
  })
}

function getAuthToken(authCode) {
  return new Promise(function(resolve, reject) {
    var authTokenParams = buildAuthTokenParams(authCode);
    fetchPost(authTokenMethod, authTokenParams)
      .then((res) => {
        if (res.iserror) {
          reject({
            iserror: true,
            title: '获取AuthToken失败',
            message: res.errormessage
          });
        } else {
          let authToken = CryptoJSUtils.AESDecrypt(res.response.response, appSecret);
          resolve(authToken);
        }
      })
      .catch((err) => {
        reject();
      });
  });
}

function saveAuthToken(authToken) {
  return new Promise(function(resolve, reject) {
    if (undefined == authToken || authToken == '') {
      reject();
    }

    if (storageUtil.setItem('authData', JSON.stringify(authToken)) &&
      storageUtil.setItem('authToken', authToken.auth_token)) {
      console.log("save auth data success" + authToken.auth_token);
      resolve();
    } else {
      console.log("save auth data error" + JSON.stringify(authToken));
      reject();
    }
  });
}

//build AuthCode
function buildAuthCodeParams(cname, uname, upass) {
  var p = {
    CompanyName: cname,
    UserId: uname,
    Password: upass,
    TimeStamp: DateTimeUtil.getCurrentDateTime(),
  };
  var pm = CryptoJSUtils.AESEncrypt(JSON.stringify(p), appSecret);

  var a = {
    appkey: appKey,
    p: pm,
    signkey: signKey
  }

  var sign = CryptoJSUtils.SHA256Encrypt(JSON.stringify(a));
  var reqData = new FormData();
  reqData["appkey"] = appKey;
  reqData["p"] = pm;
  reqData["sign"] = sign;
  return reqData;
}

//build AuthToken
function buildAuthTokenParams(authCode) {
  var p = {
    AuthParam: authCode,
    GrantType: 'auth_token',
    TimeStamp: DateTimeUtil.getCurrentDateTime(),
  }
  var pm = CryptoJSUtils.AESEncrypt(JSON.stringify(p), appSecret);
  var a = {
    appkey: appKey,
    p: pm,
    signkey: signKey
  }
  var sign = CryptoJSUtils.SHA256Encrypt(JSON.stringify(a));
  var reqData = new FormData();
  reqData["appkey"] = appKey;
  reqData["p"] = pm;
  reqData["sign"] = sign;

  return reqData;
}

function loginSuccess(user) {
  return {
    type: types.LOGIN_IN_SUCCESS,
    user: user
  }
}

function loginError(error) {
  return {
    type: types.LOGIN_IN_ERROR,
    error: error
  }
}