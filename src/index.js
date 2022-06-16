
import ReactDOM from 'react-dom';
import './index.css';
import React from 'react';
import {BrowserRouter as Router}  from "react-router-dom";
import {createBrowserHistory}  from 'history';
import * as ReactDOMClient from "react-dom/client"
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material/';
import { ContextProvider } from './hooks/useStateContext';


const darkTheme = createTheme({
  palette: {
    mode:  'dark',
  },
  typography:{
    fontFamily:'"IBM Plex Sans"',
    button: {
      textTransform: 'none',
      fontSize: 35,
      color: 'red'
    }
  }
  
})
const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);
const browserHistory=createBrowserHistory({ basename: "/" });
// Initial render: Render the page router to the root.
root.render(
  <React.StrictMode>
    <ContextProvider>
   <Router history={browserHistory}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <App/>
      </ThemeProvider>
      </Router>
      </ContextProvider>
  </React.StrictMode>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
