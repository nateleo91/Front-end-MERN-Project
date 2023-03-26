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

 