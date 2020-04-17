import React from 'react';

import './App.css';

import GithubUserProfile from './components/GithubUserProfile';
import Header from './components/Header';
import UserProfile, { ReqresUsers } from './components/UserProfile';

function App() {

  const userNames = ["trevor", "ahmadsajid", "ashrafxcoder", "mattn"];

  return (
    <div className="container">

      <Header text="Using Gitub Users API" />

      <div className="row">
        <ReqresUsers />
        {userNames.map(userName => (
          <div key={userName} className="col-sm-3">
            {/* <GithubUserProfile userName={userName} /> */}

          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
