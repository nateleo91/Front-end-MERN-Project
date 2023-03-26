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

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Weightloss</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSignInSubmit}>
              Sign In
            </Button>
          </Form>

          <hr />
