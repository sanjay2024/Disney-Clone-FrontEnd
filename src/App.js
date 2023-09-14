import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import { Home } from './components/Home/Home';
import Login from './components/Login/Login';
import Search from './components/Search/Search';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/search" element={<Search/>}></Route>
      </Routes>
    </>
  );
}

export default App;
