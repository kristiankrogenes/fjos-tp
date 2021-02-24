import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddAnimal(props) {

  const [show, setShow] = useState(false);
  const [globalId, updateId] = useState(6);

  let animal = {
    "id": globalId,
    "name": "",
    "type": "", 
    "age": 0,
    "gender": ""
  };

  function handleShow() {
    setShow(!show);
  }

  function handleChange(e) {
    animal[e.target.name] = e.target.value;
  }

  function addAnimal() {
    setShow(!show);
    updateId(globalId+1);
    props.onNewAnimal(animal);
  }

  return(
    <div>
      <Button onClick={handleShow}>ADD ANIMAL</Button>

      <Modal show={show} animation={false}>

        <Modal.Header>
          <Modal.Title>ADD NEW ANIMAL</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form>

            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name" 
                type="name"
                onChange={handleChange}/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Age</Form.Label>
              <Form.Control 
                name="age" 
                type="number"
                onChange={handleChange}/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Form.Control 
                name="type" 
                type="name" 
                onChange={handleChange}/>
            </Form.Group>

            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Control
                name="gender"
                type="name"
                placeholder="M/F"
                onChange={handleChange}/>
            </Form.Group>

          </Form> 
          
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleShow}>CLOSE</Button>
          <Button onClick={addAnimal}>ADD</Button>
        </Modal.Footer>

      </Modal>
    </div>
  )
}

export default AddAnimal;