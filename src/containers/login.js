import React from 'react';
import { Link } from "react-router-dom";

const INITIAL_STATE = {
    username: '',
    password: '',
    error: null,
    isValid: true
  };

class Login extends React.Component {
   
    constructor(props) {
        super(props);
        localStorage.setItem('session', 0);
        this.state = { ...INITIAL_STATE };
      }
      
    render() {
 
        let er = this.props.error;
        let user = this.props.user;

        if (user && user.token) {
            localStorage.setItem('session', user.token);
            this.props.history.push('/home')
        }
        const { username, password } = this.state;

        return (
            <div>

                <div className="vertical-center">

                    <div className="container ">
                        <br /><br />
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm">
                                        <h2 className="text-primary text-center ">Sign in</h2>
                                    </div>
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" value={username} name="username" onChange={this.onChange}
                                            className="form-control" id="email" placeholder="username"
                                            autoComplete="new-password" minLength="5" maxLength="11" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" id="password" name="password"
                                            placeholder="Password" value={password} onChange={this.onChange}
                                            autoComplete="username" minLength="5" maxLength="11" required />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-primary float-right" disabled={this.state.isValid}>Login</button>
                                    <br />

                                    {er && <div className="alert alert-danger" role="alert">
                                        {er.message}
                                    </div>}

                                </form>

                            </div>
                        </div>
                        <br /><br /><br /><br />

                    </div></div>


                <Link to={`/`} className="nav-link">go back </Link>
            </div>
        )

    }
}

export default Login;