import { combineReducers } from 'redux';
import adminReducer from './adminReducer';
import errorReducer from './errorReducer';
import studentReducer from './studentReducer';
import messageReducer from './messageReducer';

export default combineReducers({
    admin: adminReducer,
    student: studentReducer,
    errors: errorReducer,
    message: messageReducer
});
