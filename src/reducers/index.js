import {combineReducers} from 'redux';

import login from './auth/login';
import {loading,networkError,baseNavigation} from './common/common';
import authCheck from './auth/authCheck';

export default combineReducers({
    loading:loading,
    login:login,
    authCheck:authCheck,
    network:networkError,
    baseNavigation:baseNavigation
});