var React = require('react');

var Register = React.createClass({
    render: function() {
        return (
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel">Register to Recipe Guider</h4>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div>
                                <form>
                                    <div className='text-center'>
                                        <div className="col-xs-3 ">
                                            <label className="control-label" for="username">Username</label>
                                        </div>
                                        <div className="col-xs-8">
                                            <input type="text" id="username" name="username" placeholder="Username can contain any letters or numbers, without spaces" className="form-control"></input>
                                            <br></br>
                                        </div>

                                    </div>

                                    <div className='text-center'>
                                        <div className="col-xs-3 ">
                                            <label className="control-label" for="email">E-mail</label>
                                        </div>
                                        <div className="col-xs-8">
                                            <input type="text" id="email" name="email" placeholder="Please provide your E-mail" className="form-control"></input>
                                            <br></br>
                                        </div>

                                    </div>
                                    <div className='text-center'>
                                        <div className="col-xs-3 ">
                                            <label className="control-label" for="password">Password</label>
                                        </div>
                                        <div className="col-xs-8">
                                            <input type="password" id="password" name="password" placeholder="Enter Your Password" className="form-control"></input>
                                            <br></br>
                                        </div>
                                    </div>

                                    <div className='text-center'>
                                        <div className="col-xs-3 ">
                                            <label className="control-label" for="password_confirm">Password (Confirm)</label>
                                        </div>
                                        <div className="col-xs-8">
                                            <input type="password" id="password_confirm" name="password_confirm" placeholder="Confirm your password" className="form-control"></input>
                                            <br></br>
                                        </div>
                                    </div>

                                    <div >

                                        <div className='text-center'>
                                            <button className="btn btn-success">Register</button>
                                            <br></br>
                                            <br></br>
                                        </div>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Register;
