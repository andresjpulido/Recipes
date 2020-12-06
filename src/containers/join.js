import React from 'react';
import { Link } from "react-router-dom";

class Join extends React.Component {

    constructor(props) {
        super(props);
        localStorage.setItem('session', 0);
        this.state = {
            username: '',
            password: '',
            error: null,
            isValid: true
        };
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
                                        <h2 className="text-primary text-center ">Join</h2>
                                    </div>
                                </div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" value={username} name="username" onChange={this.onChange}
                                            className="form-control" id="username" placeholder="username"
                                            autoComplete="new-password" minLength="5" maxLength="11" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" value={username} name="username" onChange={this.onChange}
                                            className="form-control" id="email" placeholder="email"
                                            autoComplete="new-password" minLength="5" maxLength="11" required />
                                    </div>                                    
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" id="password" name="password"
                                            placeholder="password" value={password} onChange={this.onChange}
                                            autoComplete="username" minLength="5" maxLength="11" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" id="password2" name="password2"
                                            placeholder="password" value={password} onChange={this.onChange}
                                            autoComplete="username" minLength="5" maxLength="11" required />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-primary float-right"
                                        disabled={this.state.isValid}>
                                        Join
                                    </button>
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

export default Join;