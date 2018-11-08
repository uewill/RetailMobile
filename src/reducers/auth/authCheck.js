import * as actionTypes from '../../constants/actionTypes';

const initState={
    status:'检查授权',
    isChecking:true,
    isAuthed:false,
    msg:null
}

const authCheckReducer=(state=initState,action)=>{
    switch(action.type){
        case actionTypes.AUTH_CHECK_DOING: 
            return Object.assign({},state,{status:'正在检查'});
        case actionTypes.AUTH_CHECK_SUCCESS: 
        return Object.assign({},state,{isChecking:false,status:'验证成功',isAuthed:true});
        
        case actionTypes.AUTH_CHECK_ERROR: 
            return {isChecking:false,status:'验证授权失败',isAuthed:false,msg:action.msg};
        default:
            return state;
    }
}

export default authCheckReducer;