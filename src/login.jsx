import React from 'react';

class Login extends React.Component {

  constructor (props, context) {
    super(props, context);
    this.state = {};
    // this.loginHander = this.loginHandler.bind(this);
  }

  loginHandler = () => {
    fetch('http://localhost:3000/auth/google')
    .then((response) => response.json())
    .then(data => {
      console.log('data', data);
      this.setState({
        ideas: gotIdea
      });
    })
    .catch(err => {
      console.log('error', err);
    });
  }

  render () {
    return (
      <div>
        <a href='/auth/google'><button>Google Login</button></a>
      </div>
    );
  }

}

export default Login;