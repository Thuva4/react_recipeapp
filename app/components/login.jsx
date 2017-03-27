var React = require('react');

var Login = React.createClass({
    render: function() {
        return (
            <div id="login-overlay" className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel">Login to Recipe Guider</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-xs-6">
                                <div className="well">
                                    <form>
                                        <div className="form-group">
                                            <label for="username" className="control-label">Username</label>
                                            <input type="text" className="form-control" id="username" name="username" title="Please enter you username" placeholder="example@gmail.com"></input>
                                            <span className="help-block"></span>
                                        </div>
                                        <div className="form-group">
                                            <label for="password" className="control-label">Password</label>
                                            <input type="password" className="form-control" id="password" name="password" title="Please enter your password"></input>
                                            <span className="help-block"></span>
                                        </div>
                                        <div id="loginErrorMsg" className="alert alert-error hide">Wrong username og password</div>
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" name="remember" id="remember"></input>
                                                Remember login
                                            </label>
                                            <p className="help-block">(if this is a private computer)</p>
                                        </div>
                                        <button type="submit" className="btn btn-success btn-block">Login</button>
                                        <a href="#" className="btn btn-default btn-block">Help to login</a>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xs-6">
                                <p className="lead">Register now for
                                    <span className="text-success">FREE</span>
                                </p>
                                <ul className="list-unstyled">
                                    <li>
                                        <span className="fa fa-check text-success"></span>
                                        See interesting recipes
                                    </li>
                                    <li>
                                        <span className="fa fa-check text-success"></span>Save your favorite recipes</li>
                                    <li>
                                        <span className="fa fa-check text-success"></span>Submit Recipes</li>
                                    <li>
                                        <span className="fa fa-check text-success"></span>
                                        Fast checkout</li>
                                    <li>
                                        <span className="fa fa-check text-success"></span>
                                        Search/Find Recipes</li>
                                    <li>
                                        <a href="#about">
                                            <u>Read more</u>
                                        </a>
                                    </li>
                                </ul>
                                <p>
                                    <a href="#register" className="btn btn-info btn-block">Yes please, register now!</a>
                                </p>

                                <legend text='bold' className='text-center'>
                                    Or
                                </legend>
                                <a className="btn btn-block btn-social btn-google text-danger">
                                    <span className="fa fa-google"></span>
                                    Sign in with Google
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Login;
