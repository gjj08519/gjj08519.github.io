
import './App.css';

import Authenticate from './components/Authenticate'
import Layout from './components/Layout.js'
import React from 'react'
import Overview from './components/Overview'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { router } from './components/PageRoutes'
import Login from './components/Login';
/*<Route pash ="/" element={<Login />}/>
<Route path="/" element={<Layout />}>
          <Route path="/overview" element={<Overview />} />
          <Route path="/marking" element={<Marking />} />
        </Route>
           {router.map((route,index) => (
            <Route key={index} path={route.path} element={<Layout {...route}></Layout>}/>
          ))}*/
function App() {
  return (
    
    <Routes>
      {/* <Route path="/" element={<Login />} />
      <Route element={<Authenticate />}> */}
      {router.map((route,index) => (
            <Route key={index} path={route.path} element={<Layout {...route}></Layout>}/>
          ))}
      {/* </Route> */}
    </Routes>
  
  );
}

export default App;
