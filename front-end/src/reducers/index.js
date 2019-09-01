import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import errorReducer from './errorReducer';
import studentReducer from './studentReducer';

export default combineReducers({
    admin: adminReducer,
    student: studentReducer,
    errors: errorReducer
});
