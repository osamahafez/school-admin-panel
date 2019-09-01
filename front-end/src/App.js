import React from 'react';
import './App.css';
import setAdminToken from './utils/setAdminToken';
import store from './store';
import { getAdmin } from './actions/adminActions';
import jwt_decode from 'jwt-decode';
import { Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin/AdminLogin'


// I want the user to remain logged in even after refreshing the page or moving between pages
if (localStorage.jwtToken) {
    // set the token to the authorization header (the one that you find in postman)
    setAdminToken(localStorage.jwtToken);
    // decode the jwt token to get user data
    const decoded = jwt_decode(localStorage.jwtToken);
    // send the decoded data to a reducer to use the user in our components
    store.dispatch(getAdmin(decoded));

    // check if the token is expired
    // const currentTime = Date.now() / 1000;
    // if(currentTime > decoded.exp) {
    //     // clear admin
    //     store.dispatch(clearAdmin());
    //     // logout admin
    //     store.dispatch(logoutAdmin());
    //     //redirect to login
    //     window.location.href = '/login';
    // }
}


function App() {
    return (
        <div className='App'>
           <Route exact path='/' component={AdminLogin} />
        </div>
    );
}

export default App;
