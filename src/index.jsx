import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {grey300, cyan500} from 'material-ui/styles/colors';
import App from './components/App.jsx';

document.addEventListener('DOMContentLoaded', function () {
  
  ReactDOM.render(
   <MuiThemeProvider muiTheme={getMuiTheme()}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </MuiThemeProvider>,
    document.getElementById('root')
  );
});
