import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../_reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { redirectMiddleware } from './redirectMiddleware'

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer , composeWithDevTools(
        applyMiddleware(    
            thunkMiddleware , 
            loggerMiddleware , 
            redirectMiddleware
        )   
    )
);

/* dev note : 
    Redux thunk - middleware to handle async actions in redux 
    
*/