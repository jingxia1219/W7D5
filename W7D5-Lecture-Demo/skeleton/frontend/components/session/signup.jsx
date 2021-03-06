import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      passwords: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger;
    this.props.createNewUser(this.state)
      .then(() => this.props.history.push('/chirps'));
  }

  render () {
    return (
      <div className="session-form">
        <h2>Sign Up</h2>
      <label>Username:
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleInput('username')}/>
      </label>
      <label>Email:
        <input
          type="text"
          value={this.state.email}
          onChange={this.handleInput('email')}/>
      </label>
      <label>Password:
        <input
          type="text"
          value={this.state.password}
          onChange={this.handleInput('password')}/>
      </label>
      <button onClick={this.handleSubmit}>Sign Up</button>
      </div>
    );
  }
}

export default SignUp;
