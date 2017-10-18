import React from 'react';
import { Route } from 'react-router-dom';

import InfiniteSpace from './InfiniteSpace.jsx';
import Cluster from './Cluster.jsx';
import Calendar from './Calendar.jsx';
import Canvas from './Canvas.jsx';
import TMS from './TMS.jsx';
import Login from './login.jsx';


class App extends React.Component {
  
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Route 
          path='/' 
          render = { (props) => <Login {...props} /> }  
        />       
        <Route 
          path='/Cluster' 
          render = { (props) => <Cluster {...props} /> }  
        />
        <Route 
          exact path='/InfiniteSpace'
          render={ (props) =>  <InfiniteSpace {...props}/> }
        />
        <Route 
          exact path = '/calendar' 
          render={(props) => <Calendar {...props} />} 
        />
        <Route 
          exact path = '/tms' 
          render={(props) => <TMS {...props} />} 
        />
      </div>
    );
  }
}

export default App;
