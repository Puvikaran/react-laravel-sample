import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password: ''            
        }
    }

    changeUsername(e){
        this.setState({username: e.target.value});
    }

    changePassword(e){
        this.setState({password: e.target.value});
    }

    render() {
        return (

            <div className="col-md-8 col-md-offset-2">
                <div className="panel panel-default">
                    <div className="panel-heading">Login</div>

                    <div className="panel-body">
                        <form className="form-horizontal" >
                            <div className="form-group">
                                <label className="col-sm-4 control-label">User Name</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" placeholder="User Name" name="username" value={this.state.username} onChange={this.changeUsername.bind(this)} required/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-4 control-label">Password</label>
                                <div className="col-sm-6">
                                    <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.changePassword.bind(this)} required/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-offset-4 col-sm-4">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </div>

                        </form>
                        <div className="text-center">
                            <Link to="/forgot">Forgot Password?</Link>&nbsp;&nbsp;
                            <Link to="/register">Create account</Link>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
