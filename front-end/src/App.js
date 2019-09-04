import React from 'react';
import './App.css';
import setAdminToken from './utils/setAdminToken';
import store from './store';
import { getAdmin } from './actions/adminActions';
import jwt_decode from 'jwt-decode';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';
import AdminLogin from './components/AdminLogin/AdminLogin'
import Dashboard from './components/Dashboard/Dashboard';
import Students from './components/Students/Students';
import AddStudent from './components/AddStudent/AddStudent';
import UpdateStudent from './components/UpdateStudent/UpdateStudent';
import Search from './components/Search/Search';
import { logoutAdmin } from './actions/adminActions';


// I want the user to remain logged in even after refreshing the page or moving between pages
if (localStorage.jwtToken) {
    // set the token to the authorization header (the one that you find in postman)
    setAdminToken(localStorage.jwtToken);
    // decode the jwt token to get user data
    const decoded = jwt_decode(localStorage.jwtToken);
    // send the decoded data to a reducer to use the user in our components
    store.dispatch(getAdmin(decoded));

    //check if the token is expired
    const currentTime = Date.now() / 1000;
    if(currentTime > decoded.exp) {
        // logout admin
        store.dispatch(logoutAdmin());
        //redirect to login
        window.location.href = '/';
    }
}


function App() {
    return (
        <div className='App'>
           <Route exact path='/' component={AdminLogin} />
           <Switch>
                <PrivateRoute exact path={'/dashboard'} component={Dashboard} />
           </Switch>
           <Switch>
                <PrivateRoute exact path={'/students'} component={Students} />
           </Switch>
           <Switch>
                <PrivateRoute exact path={'/add-student'} component={AddStudent} />
           </Switch>
           <Switch>
                <PrivateRoute exact path={'/update-student/:student_id'} component={UpdateStudent} />
           </Switch>
           <Switch>
                <PrivateRoute exact path={'/search'} component={Search} />
           </Switch>
        </div>
    );
}

export default App;
