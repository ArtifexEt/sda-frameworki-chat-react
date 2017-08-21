import React, { Component } from 'react';
import './App.css';
import Login from './components/login/Login'
import Chat from './components/chat/Chat'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  loginService;

  constructor(props) {
    super(props);
    this.state = {
      login: {
        isUserLoggedIn: false,
        name: ''
      }
    }
  }

  login(name) {
    this.setState({ login: { isUserLoggedIn: true, name } })
  }

  render() {
    return (
      <div>
        {this.state.login.isUserLoggedIn ? null : <Login login={(name) => this.login(name)} />}
        {this.state.login.isUserLoggedIn ? <Chat name={this.state.login.name}/> : null}
      </div>

    );
  }
}

export default App;
