import React from "react";
import "./App.css";
import GetPhoto from './components/GetPhoto.js';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1>NASA PHOTO OF THE DAY</h1>
        <GetPhoto />
      </div>
    </div>
  );
}

export default App;
