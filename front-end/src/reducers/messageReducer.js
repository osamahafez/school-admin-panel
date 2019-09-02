import { SET_MESSAGE } from '../actions/types';

const initialState = {
    msg: null
};

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGE:
            return {
                ...state,
                msg: action.payload
            };

        default:
            return state;
    }
};

export default errorReducer;
