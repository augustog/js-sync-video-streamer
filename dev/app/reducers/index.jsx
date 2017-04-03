/**
 * Created by augusto on 2/4/17.
 */

import {combineReducers, applyMiddleware} from 'redux'
import {connected, rtc} from 'redux-rtc'

function rootReducer(state={}, action){
    return state; //TODO: Implement if needed
}

const Reducer = combineReducers({
    rtc: rtc,
    rootReducer: rootReducer
});

export default Reducer;