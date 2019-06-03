import {
    combineReducers
} from 'redux';
import workReducer from './workReducer'
import skillReducer from './skillReducer'

export default combineReducers({
    work: workReducer,
    skill: skillReducer,
})