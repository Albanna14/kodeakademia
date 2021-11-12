import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './view/home';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
