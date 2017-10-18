import React from 'react';

class App extends React.Component {
  
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Canvas />
      </div>
    );
  }
}

export default App;
