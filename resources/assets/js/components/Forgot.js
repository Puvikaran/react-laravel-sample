import React, { Component } from 'react';


export default class Forgot extends Component {
    render() {
        return ( <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Forgot Password</div>

                                <div className="panel-body">
                                    <div className="help-block">
                                        <strong></strong>
                                    </div>
                                    <form className="form-horizontal">
                                          <div className="form-group">
                                            <label className="col-sm-4 control-label">E-mail</label>
                                            <div className="col-sm-6">
                                              <input type="text" className="form-control" placeholder="E-mail" onChange={this.handleChange} />
                                            </div>
                                          </div>

                                          <div className="form-group">
                                            <div className="col-sm-offset-4 col-sm-4">
                                              <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                          </div>

                                        </form>

                                </div>
                            </div>
                        </div>
        );
    }
}
