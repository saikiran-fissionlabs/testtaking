import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import Counter from './containers/Counter';
// import './App.scss';
import Login from './containers/Login';
import Register from './containers/Register';
import Home from './containers/Home';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <Counter />
    //   </header>
    // </div>
    <Router>
      <Routes>
        {/* <Route path='/' component={Login} /> */}
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
