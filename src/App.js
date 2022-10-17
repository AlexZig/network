import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer'
import ChatsContainer from './components/Chats/ChatsContainer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Routes>
        <Route
          path='/profile'
          element={<ProfileContainer 
            // decorColor={props.state.decorColor}
            // profileData={props.state.profilePage}
            // dispatch={props.dispatch}
          />}
        />
        <Route
          path='/chats'
          element={<ChatsContainer
            // massagesData={props.state.chatsPage}
            // dispatch={props.dispatch}
          />}
        />
      </Routes>
    </div>
  );
}

export default App;
