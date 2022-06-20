import { combineReducers } from 'redux'
import { calcReduxer } from './calc/calcReducer';


const rootReducer = combineReducers({
    calc: calcReduxer
});


export default rootReducer