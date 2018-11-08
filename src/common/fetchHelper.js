import { Alert } from 'react-native';
import * as types from '../constants/actionTypes';
import { postData } from '../utils/fetchUtil';
import { baseUrl } from '../constants/baseConfig';
import loadingAction from '../actions/base/loadingAction';

export function fetchPostWithLoading(dispatch, actionUrl = '', formData = {}) {
  return new Promise((resolve, reject) => {
    dispatch(loadingAction.isLoading());
    postData(baseUrl + actionUrl, formData)
      .then((res) => {
        dispatch(loadingAction.isLoadDone());
        resolve(res);
      })
      .catch((err) => {
        dispatch(loadingAction.isLoadDone());
        Alert.alert('错误', err.message);
        reject(err.message);
      //dispatch(isNetworkError());
      });
  });

}

export function fetchPost(actionUrl = '', data = {}) {
  return new Promise((resolve, reject) => {
    postData(baseUrl + actionUrl, data).then((res) => {
      resolve(res);
    }).catch((err) => {
      Alert.alert('错误', err.message);
      reject(err.message);
    })

  });
}
//构建签名
function buildRequestParams(data = {}) {

}

function isNetworkError() {
  return {
    type: types.NETWORK_ERROR
  };
}
