import { alertConstants } from '../_constants';

export function alert(state = {}, action) {
    switch (action.type) {
      case alertConstants.SUCCESS:
        return {
          type: 'alert-success',
          message: action.message
        };
      case alertConstants.ERROR:
        return {
          type: 'alert-danger',
          message: action.message
        };
      case alertConstants.CLEAR:
        return {};
      default:
        return state
    }
  }

/* Dev note : 
    - reducer : takes in previous state and action then update part of application state and return next state
              : describe how state change happened
*/