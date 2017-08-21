import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {login: ''};
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="card">
                    <div className="card-block">
                        <h3 className="card-title">Login:</h3>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Enter user name"
                            onChange={(event)=>this.setState({login: event.target.value})}></input>
                            <span className="input-group-btn">
                                <button className="btn btn-secondary"
                                    onClick={()=>this.onEnterButtonClick()}
                                    type="button">Enter</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onEnterButtonClick(){
        this.props.login(this.state.login);
    }
}

export default Login;
