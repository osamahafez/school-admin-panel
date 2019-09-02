import { SET_LOADING, GET_STUDENTS } from '../actions/types';

const initialState = {
    student: null,
    students: null,
    loading: false
}

const studentReducer = (state = initialState, action) => {

    switch(action.type) {

        case GET_STUDENTS:
            return {
                ...state,
                students: action.payload,
                loading: false
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        default:
            return state;
    }

}

export default studentReducer;