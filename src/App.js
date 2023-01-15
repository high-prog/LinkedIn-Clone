import React, { useEffect } from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login.js';
import Header from './Components/Header.js';
import Home from './Components/Home.js';
import { getUserAuth } from './actions';
import { connect } from 'react-redux';

function App(props) {
  // console.log(props);
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

const matchStateToProps = (state) => {
  return {};
};

const matchDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(matchStateToProps, matchDispatchToProps)(App);
