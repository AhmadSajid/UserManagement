import React from 'react';

import './App.css';

import GithubUserProfile from './components/GithubUserProfile';

function App() {
  return (
    <div className="container">

      <hr />
      <hr />

      <div className="row">
        <div className="col-sm-3">
        <GithubUserProfile userName={"trevor"} />
        </div>
        <div className="col-sm-3">
          <GithubUserProfile userName={"ahmadsajid"} />
        </div>
        <div className="col-sm-3">
        <GithubUserProfile userName={"ashrafxcoder"} />
        </div>
        <div className="col-sm-3">
          <GithubUserProfile userName={"mattn"} />
        </div>
      </div>

    </div>
  );
}

export default App;
