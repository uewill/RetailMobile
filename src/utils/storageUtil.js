import { AsyncStorage } from "react-native";

export default class storageUtil{
  static async setItem(key,value){
        try{
            await AsyncStorage.setItem(key,value);
            return true;
        }
        catch(err){
            console.log('save data error:'+err);
            return false;
        }
    }
    static async getItem(key){
        try{
           return await AsyncStorage.getItem(key);
        }
        catch(err){
            console.log('get data error:'+err);
        }
    }   
}
