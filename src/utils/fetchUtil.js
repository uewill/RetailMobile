import queryString from 'query-string';

export function postData(url = '', formData = {}) {
  console.log("request:" + url);
  console.log(JSON.stringify(formData));
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: queryString.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        console.log("response:" + url);
        console.log(res);
        resolve(res.json());
      } else {
        var errData = {};
        if (res.status == 404) {
          errData = {
            message: '404,无法连接到请求地址' + url
          }
        } else if (res.status == 500) {
          errData = {
            message: '500,服务器处理异常' + url
          }
        } else {
          errrData = {
            message: res.status + ',无法与服务器建立连接' + url
          }
        }
        reject(errData);
      }
    }).catch((err) => {
      reject(err);
    });
  });
}