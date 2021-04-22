import {combineReducers} from 'redux';
import winnersReducer from './winners'

export default combineReducers({
  winners: winnersReducer
});
