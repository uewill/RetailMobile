import * as types from '../../constants/actionTypes';

export default class LoadingAction{
    static isLoading(){
        return {type:types.LOAD_ING};
    }
    static isLoadDone(){
        return {type:types.LOAD_DONE};
    }
}
