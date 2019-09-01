import axios from 'axios';
import { GET_ADMIN, GET_ERRORS } from './types';
import jwt_decode from 'jwt-decode';
import setAdminToken from '../utils/setAdminToken';

export const loginAdmin = (adminData) => (dispatch) => {
    axios
        .post('/api/admins/login', adminData)
        .then((res) => {
            // fetch the jwt token from the backend
            const { token } = res.data;
            // store the token in the local storage
            localStorage.setItem('jwtToken', token);
            // set the token to the authorization header (the one that you find in postman)
            setAdminToken(token);
            // decode the jwt token to get admin data
            const decoded = jwt_decode(token);
            // send the decoded data to a reducer to use the admin in our components
            dispatch(getAdmin(decoded));
        })
        .catch((err) => {
            console.log('err:', err);

            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        }
            
        );
};

export const getAdmin = (adminInfo) => {
    return {
        type: GET_ADMIN,
        payload: adminInfo
    }   
}
