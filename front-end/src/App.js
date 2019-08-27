import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin/AdminLogin'
import SideBar from './components/SideBar/SideBar';

function App() {
    return (
        <div className='App'>
           <Route exact path='/' component={AdminLogin} />
        </div>
    );
}

export default App;
