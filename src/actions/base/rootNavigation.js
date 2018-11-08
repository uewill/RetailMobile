import * as types from '../../constants/actionTypes';

export function setNavigation(navigation){
    return {
        type:types.NAVIGATION_SET,
        navigation:navigation
    }
}