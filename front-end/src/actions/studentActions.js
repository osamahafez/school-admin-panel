import axios from 'axios';
import {
    SET_LOADING,
    GET_STUDENTS,
    GET_STUDENT,
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

export const getStudent = (student_id) => (dispatch) => {
    dispatch(setLoading());
    axios
        .get(`/api/students/${student_id}`)
        .then((res) => {
            dispatch({
                type: GET_STUDENT,
                payload: res.data
            });
        })
        .catch((err) => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
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
            };
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

export const updateStudent = (studentData, history, student_id) => dispatch => {
    
    axios.put(`/api/students/${student_id}`, studentData)
        .then(() => {
            const msg = {
                content: 'Student Updated Successfully',
                type: 'success'
            };
            dispatch(setMessage(msg));
            history.push('/students');
        })
        .catch((err) => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const deleteStudent = (student_id, student_stage) => (dispatch) => {
    axios
        .delete(`/api/students/${student_id}`)
        .then(() => {
            dispatch(getStudents({ stage: student_stage }));
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

export const clearErrors = () => {
    return {
        type: GET_ERRORS,
        payload: {}
    };
}