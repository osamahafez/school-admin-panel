import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, admin, ...rest}) => {
    return (
        <Route 
        {...rest}
        render = {
            (props) => admin.isAuthenticated === true ? (<Component {...props} />) : (<Redirect to='/' />)
        }
        />
    );
}
    
PrivateRoute.propTypes = {
    admin: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    admin: state.admin
})

export default connect(mapStateToProps)(PrivateRoute);