import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username:'',
            email: '',
            password: '',
            confirm: ''
        }
    }

    changeName(e){
        this.setState({ name: e.target.value });
    }

    changeUserName(e){
        this.setState({ username: e.target.value });
    }

    changeEmail(e){
        this.setState({ email: e.target.value });
    }

    channgePassword(e){
        this.setState({ password: e.target.value });
    }

    channgeConfirmPassword(e){
        this.setState({ confirm: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();
        const userInfo = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }


    }

	render() {
		return (
			<div className="col-md-8 col-md-offset-2">
				<div className="panel panel-default">
					<div className="panel-heading">Register</div>

					<div className="panel-body">
						<form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
							<div className="form-group">
								<label className="col-sm-4 control-label">Name</label>
								<div className="col-sm-6">
									<input type="text" className="form-control" placeholder="Full Name" name="name" value={this.state.name} onChange={this.changeName.bind(this)} required/>
								</div>
							</div>
							<div className="form-group">
								<label className="col-sm-4 control-label">User Name</label>
								<div className="col-sm-6">
									<input type="text" className="form-control" placeholder="User Name" name="username" value={this.state.username} onChange={this.changeUserName.bind(this)} required/>
								</div>
							</div>
							<div className="form-group">
								<label className="col-sm-4 control-label">E-mail</label>
								<div className="col-sm-6">
									<input type="text" className="form-control" placeholder="E-mail" name="email" value={this.state.email} onChange={this.changeEmail.bind(this)} required/>
								</div>
							</div>
							<div className="form-group">
								<label className="col-sm-4 control-label">Password:</label>
								<div className="col-sm-6">
									<input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.channgePassword.bind(this)} required/>
								</div>
							</div>
							<div className="form-group">
								<label className="col-sm-4 control-label">Confirm Password:</label>
								<div className="col-sm-6">
									<input type="password" className="form-control" placeholder="Confirm Password" name="password_confirmation" value={this.state.confirm} onChange={this.channgeConfirmPassword.bind(this)} required/>
								</div>
							</div>
							<div className="form-group">
								<div className="col-sm-offset-4 col-sm-4">
									<button type="submit" className="btn btn-primary">Register</button>
								</div>
							</div>
						</form>
						<div className="text-center"><Link to="/login">Already have an account</Link></div>
					</div>
				</div>
			</div>
		);
	}
}
