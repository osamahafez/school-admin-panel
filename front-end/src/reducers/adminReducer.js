import { GET_ADMIN } from '../actions/types';
import IsEmpty from '../validation/IsEmpty';

const initialState = {
    isAuthenticated: false,
    admin: {}
}

const adminReducer = (state = initialState, action) => {

    switch(action.type) {

        case GET_ADMIN:
            return {
                ...state,
                isAuthenticated: !IsEmpty(action.payload),
                admin: action.payload
            }

        default:
            return state;
    }

}

export default adminReducer;