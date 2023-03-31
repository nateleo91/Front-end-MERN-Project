import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import '../css/Header.css'

function Header() {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowSignUpModal = () => { setShowSignUpModal(true); setShowLoginModal(false); }
  const handleCloseSignUpModal = () => setShowSignUpModal(false);

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    // Handle sign-in submission logic here
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    // Handle sign-up submission logic here
  };

  return (
    <div className="buttons">
      <div className="title">
        <a href='/' className="link"> <h1 className="name">CalorieTrakr</h1> </a>
      </div>
      <div className="button-group">
        <a href='/diary'> Diary </a>
        |
        <a href='/create'> Create </a>
        |
        <a href='/AboutUs'> About Us </a>
      </div>

      <Button className='sign' variant="primary" onClick={handleShowLoginModal}>
        SignIn/SignUp
      </Button>

      <Modal show={showLoginModal} onHide={handleCloseLoginModal} className="login-modal">
        <Modal.Header closeButton>
          <Modal.Title>Weightloss Login</Modal.Title>
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
            <Button variant="Secondary" type="button" onClick={handleShowSignUpModal}>
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLoginModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSignUpModal} onHide={handleCloseSignUpModal}>
        <Modal.Header closeButton>
          <Modal.Title>Weightloss SignUp</Modal.Title>
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

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSignUpSubmit}>
              Create Account
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSignUpModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Header;
