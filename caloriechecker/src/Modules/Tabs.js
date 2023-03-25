import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/tabs.css'

function Tabs() {
    const navigate = useNavigate()

return (    
<div className="buttons">
            <button class="button" onClick={() => navigate('/diary')}>
              Diary
            </button>
            |
            <button class="button" onClick={() => navigate('/create')}>
              Create
            </button>
            |
            <button class="button" onClick={() => navigate('/AboutUs')}>
              AboutUs
            </button>
      </div>
)
}

export default Tabs