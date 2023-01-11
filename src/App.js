import React from 'react';
import './style.css';
import Login from './Components/Login.js';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';

 function App() {
  return (

<>
    <div className="App">
            <Router>
            <Routes>
            <Route path="/" element={<Login />} />
            </Routes>
            </Router>
    </div>
</>
  );
}

export default App;