import React from 'react';
import { Link } from 'react-router-dom';

function Title() {

  return (
    <div className="title">
      <a href='/'> <h1>Weightloss Tracker</h1> </a>
      <div className="buttons">
        <Link to="/Diary">
            <button>Diary</button>
        </Link>
        <Link to="/Create">
            <button>Create</button>
        </Link>
      </div>
    </div>
  );
}

export default Title;