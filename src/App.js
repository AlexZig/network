import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Profile from './components/Profile/Profile';
import Chats from './components/Chats/Chats';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Routes>
        <Route path='/profile' element={<Profile />} />
        <Route path='/chats' element={<Chats />} />
      </Routes>
    </div>
  );
}

export default App;
