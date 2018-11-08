import * as types from '../../constants/actionTypes';

const loadingInitialState={
    text:'正在加载...',
    isLoading:false
}

//加载框状态处理
 const loading=(state=loadingInitialState,action)=>{
    switch(action.type){
        case types.LOAD_ING:
            return {
                ...state,
                text:action.text,
                isLoading:true,
            }
            break;
        case types.LOAD_DONE:
            return {
                ...state,
                isLoading:false,
            }
            break;
        default:
        return state;
    }
}

//网络异常处理
const networkErrorInitialState={
    isError:false,
    errorMsg:'',
}
const networkError=(state=networkErrorInitialState,action)=>{
    switch(action.type){
        case types.NETWORK_ERROR:
            return {
                ...state,
                errorMsg:action.errorMsg,
                isError:true,
            }
            break;
        case types.NETWORK_SUCCESS:
            return {
                ...state,
                errorMsg:action.errorMsg,
                isError:false,
            }
            break;
        default:
        return state;
    }
}
const navigationInitState ={navigation:null};

const baseNavigation=(state=navigationInitState,action)=>{
    switch(action.type){
        case types.NAVIGATION_SET:
            return {
                ...state,
                navigation:action.navigation
            }
            break;
        default:
        return state;
    }
}

export {loading,networkError,baseNavigation};