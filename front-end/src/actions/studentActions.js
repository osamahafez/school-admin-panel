import axios from 'axios';
import {
    SET_LOADING,
    GET_STUDENTS,
    GET_ERRORS,
    SET_MESSAGE
} from './types';

export const getStudents = (searchData) => (dispatch) => {
    dispatch(setLoading());
    axios
        .post('/api/students/search', searchData)
        .then((res) => {
            dispatch({
                type: GET_STUDENTS,
                payload: res.data
            });
        })
        .catch(() => {
            dispatch({
                type: GET_STUDENTS,
                payload: null
            });
        });
};

export const createStudent = (studentData, history) => (dispatch) => {
    axios
        .post('/api/students/create', studentData)
        .then(() => {
            const msg = {
                content: 'Student Created Successfully',
                type: 'success'
            }
            dispatch(setMessage(msg));
            history.push('/students');
        })
        .catch((err) => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};

export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};

export const setMessage = (msg) => {
    return {
        type: SET_MESSAGE,
        payload: msg
    };
};