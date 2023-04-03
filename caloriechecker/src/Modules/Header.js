import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import '../css/Header.css'

function Header(props) {
  const handleInput = props.handleInput
  const handleLogIn = props.handleLogIn
  const handleSignUp = props.handleSignUp

  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleShowLoginModal = () => { setShowLoginModal(true); setShowSignUpModal(false); }
  const handleCloseLoginModal = () => setShowLoginModal(false);
  const handleShowSignUpModal = () => { setShowSignUpModal(true); setShowLoginModal(false); }
  const handleCloseSignUpModal = () => setShowSignUpModal(false);

  async function handleSignInSubmit(event) {
    event.preventDefault()
    await handleLogIn()
    handleCloseLoginModal();
  };

  async function handleSignUpSubmit(event) {
    event.preventDefault();
    await handleSignUp()
    handleCloseSignUpModal()
  };

  return (
    <div className="headerButtons">
      <div className="title">
        <a href='/' className="link"> <h1 className="name">CalorieTrakr</h1> </a>
      </div>
      <div className="button-group">
        <a className="headerTabs" href='/diary'> Diary </a>
        <a className="headerTabs" href='/create'> Create </a>
        <a className="headerTabs" href='/AboutUs'> About Us </a>
      </div>

      <Button className='sign' variant="primary" onClick={handleShowLoginModal}>
        SignIn/SignUp
      </Button>

      <Modal show={showLoginModal} onHide={handleCloseLoginModal} className="login-modal">
        <Modal.Header closeButton>
          <Modal.Title>CalorieTrakr Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleInput} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" onChange={handleInput} />
            </Form.Group>
          <div className="loginButtons">
            <Button className="sign" variant="primary" type="submit" onClick={handleSignInSubmit}>
              Sign In
            </Button>
            <Button className="sign" variant="primary" type="button" onClick={handleShowSignUpModal}>
              Sign Up
            </Button>
          </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseLoginModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSignUpModal} onHide={handleCloseSignUpModal} className="signupModal">
        <Modal.Header closeButton>
          <Modal.Title>CalorieTrakr SignUp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleInput} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" onChange={handleInput} />
            </Form.Group>

            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" name="retypePassword" placeholder="Confirm Password" onChange={handleInput} />
            </Form.Group>

            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="firstName" name="user_firstname" placeholder="First Name" onChange={handleInput} />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="lastName" name="user_lastname" placeholder="Last Name" onChange={handleInput} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSignUpSubmit}>
              Create Account
            </Button>
            <Button variant="primary" type="button" onClick={handleShowLoginModal}>
              SignIn
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
