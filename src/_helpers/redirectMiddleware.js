import { userService } from '../_services' 
import { history } from './history'

export const redirectMiddleware = store => next => action => {
    //check unauthorized 
    if(action.error ==  'Unauthorized' ){
        userService.logout();
        history.push('/login');
    }
    return next(action);
}

/* dev note : 
    intercept to redirect unauthorized error returned from API 
    
*/