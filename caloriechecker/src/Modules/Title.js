import React from 'react';
import { useNavigate } from 'react-router-dom';

function Title() {
  const navigate = useNavigate()

  return (
    <div className="title">
      <a href='/' className="link"> <h1 className="titleText">Weightloss Tracker</h1> </a>
      <div className="buttons">
          
            <button class="button" onClick={() => navigate('/diary')}>
              Diary
            </button>
            |
            <button class="button" onClick={() => navigate('/create')}>
              Create
            </button>
      </div>
    </div>
  );
}

export default Title;