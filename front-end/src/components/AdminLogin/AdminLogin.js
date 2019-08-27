import React, { Component } from 'react'
import './AdminLogin.css';

class AdminLogin extends Component {

    state = {
        username: '',
        password: ''
    }

    onChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className='admin-login'>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="offset-md-3 col-md-6">
                            <div className="display-4 text-center my-5">Admin Login</div>
                            <div className='login-form'>
                                <form onSubmit={this.onSubmitHandler} className='text-center'>
                                    
                                    {/* Username */}
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"> <i className="fas fa-user fa-lg"></i> </div>
                                            </div>
                                            <input type="text" name='username' className="form-control form-control-lg" placeholder="Username" onChange={this.onChangeHandler} />
                                        </div>
                                    </div>
                                    {/* Password */}
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fas fa-key fa-lg"></i></div>
                                            </div>
                                            <input type="password" name='password' className="form-control form-control-lg" placeholder="Password" onChange={this.onChangeHandler} />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminLogin;