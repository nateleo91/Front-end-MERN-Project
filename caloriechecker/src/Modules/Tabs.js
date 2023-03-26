import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import '../css/tabs.css'

function Tabs() {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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

            <Button class='sign' variant="primary" onClick={handleShowModal}>
            SignIn/Sign-up
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Popup Title</Modal.Title>
              </Modal.Header>
              <Modal.Body>Popup Content</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
      </div>
)
}

export default Tabs