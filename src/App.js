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

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <Counter />
    //   </header>
    // </div>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/instrucations' element={<Instrucations/>} />
        <Route path='/test' element={<TestTake/>} />
        <Route path='/results' element={<Results/>} />
      </Routes>
    </Router>
  );
}

export default App;
