import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import Counter from './containers/Counter';
// import './App.scss';
import Login from './containers/Login';
import Register from './containers/Register';
import Home from './containers/Home';
import Instrucations from './containers/Instrucations';
import TestTake from './containers/TestTake';
import Results from './containers/Results';

const url = 'main--elaborate-tiramisu-d51710.netlify.app';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <Counter />
    //   </header>
    // </div>
    <Router>
      <Routes>
        <Route path={ '/'} element={<Login/>} />
        <Route path={url + '/register'} element={<Register/>} />
        <Route path={url + '/home'} element={<Home/>} />
        <Route path={url + '/instrucations'} element={<Instrucations/>} />
        <Route path={url + '/test'} element={<TestTake/>} />
        <Route path={url + '/results'} element={<Results/>} />
      </Routes>
    </Router>
  );
}

export default App;
