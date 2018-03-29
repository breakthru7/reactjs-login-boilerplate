import {alertConstants} from '../_constants';

export const alertActions = {
    success,
    error,
    clear
};


function success(message) {
    return { 
        type: alertConstants.SUCCESS, 
        message
    };
}

function error(message) {
    return { 
        type: alertConstants.ERROR, 
        message 
    };
}

function clear() {
    return { 
        type: alertConstants.CLEAR 
    };
}

/*--- Dev note : Define action creators (function that create action) --- //
 (actions are plan JS object or payload that send data to store when application state changed , 
    described something happened )
    
    - only type property is required 
*/