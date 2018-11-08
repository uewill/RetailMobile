import CryptoJS from 'crypto-js';

export default class CryptoJSUtils{
    static AESEncrypt(content,key) {
        var nkey = CryptoJS.enc.Utf8.parse(key); 
        var iv = CryptoJS.enc.Utf8.parse(key.substring(5,21));//保持与服务端一致的IV

        var srcs = CryptoJS.enc.Utf8.parse(content);
        var encrypted = CryptoJS.AES.encrypt(srcs, nkey, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });

        return encrypted.toString();
    }
    static AESDecrypt(content,key){
        var nkey = CryptoJS.enc.Utf8.parse(key); 
        var iv = CryptoJS.enc.Utf8.parse(key.substring(5,21));//保持与服务端一致的IV
        let baseResult=CryptoJS.enc.Base64.parse(content);   // Base64解密
        let ciphertext=CryptoJS.enc.Base64.stringify(baseResult);     // Base64解密
        var decryptResult = CryptoJS.AES.decrypt(ciphertext, nkey, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
       let resData=decryptResult.toString(CryptoJS.enc.Utf8).toString();

        console.log(resData);
       return JSON.parse(resData);
    }
    static SHA256Encrypt(content){
       return CryptoJS.SHA256(content).toString(CryptoJS.enc.Hex);
    }
}