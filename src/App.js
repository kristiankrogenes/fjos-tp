import React, { useEffect } from 'react';
import { useState } from 'react';

import './App.css';
import AddAnimal from './AddAnimal.js';
import AnimalTable from './AnimalTable.js';

import animals from './animals.json';

import "bootstrap/dist/css/bootstrap.css";

function App() {

  const [animalList, setAnimalList] = useState([]);
  
  useEffect(() => {
    setAnimalList(animals.map(object => {
      return object;
    }));
  }, []);

  function addNewAnimal(newAnimal) {
    setAnimalList([...animalList, newAnimal]);
  }

  function deleteAnimal(id) {
    setAnimalList(animalList.filter(animal => animal.id !== id));
  }

  return (
    <div className="App">
      
      <h1>FJØSET</h1>

      <AnimalTable animals={animalList} onDeleteAnimal={deleteAnimal} />

      <AddAnimal onNewAnimal={addNewAnimal} />

    </div>
  );
}

export default App;
