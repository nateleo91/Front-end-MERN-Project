import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import '../css/tabs.css'

function Tabs() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    // handle sign-in form submission here
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    // handle sign-up form submission here
  };

  return (
    <div className="buttons">
      <div className="button-group">
        <button className="button" onClick={() => navigate('/diary')}>
          Diary
        </button>
        |
        <button className="button" onClick={() => navigate('/create')}>
          Create
        </button>
        |
        <button className="button" onClick={() => navigate('/AboutUs')}>
          AboutUs
        </button>

        <Button className='sign' variant="primary" onClick={handleShowModal}>
          SignIn/Sign-up
        </Button>
      </div>

   