import React from 'react';

class Login extends React.Component {

  constructor (props, context) {
    super(props, context);
    this.state = {};
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