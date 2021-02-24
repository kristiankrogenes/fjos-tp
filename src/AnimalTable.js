import React from 'react';
import './App.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function AnimalTable(props) {

  function handleDelete(e) {
    props.onDeleteAnimal(parseInt(e.target.id));
  }

  return(
    <div className="TableContainer">
      <Table striped bordered variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>NAME</th>
            <th>TYPE</th>
            <th>AGE</th>
            <th>GENDER</th>
          </tr>
        </thead>
        <tbody>
          {props.animals.map(animal => {
            return(
              <tr>
                <th>{animal.id}</th>
                <th>{animal.name}</th>
                <th>{animal.animalType}</th>
                <th>{animal.age}</th>
                <th>{animal.gender}</th>
                <th><Button onClick={handleDelete} id={animal.id}>DELETE</Button></th>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default AnimalTable;