import React from 'react';

function Title() {

  return (
    <div className="title">
      <a href='/'> <h1>Weightloss Tracker</h1> </a>
      <div className="buttons">
            <button>Diary</button>
            <button>Create</button>
      </div>
    </div>
  );
}

export default Title;