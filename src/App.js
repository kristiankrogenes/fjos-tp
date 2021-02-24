import React, { useEffect } from 'react';
import { useState } from 'react';

import './App.css';
import AddAnimal from './AddAnimal.js';
import AnimalTable from './AnimalTable.js';

import animals from './animals.json';

import "bootstrap/dist/css/bootstrap.css";

import axios from 'axios'

function App() {

  const [animalList, setAnimalList] = useState([]);
  const [animalTypeList, setAnimalTypeList] = useState([]);

  async function getAnimalTypesData() {
    const animalTypes = await axios.get('http://localhost:8000/animaltypes/');
    setAnimalTypeList(animalTypes.data);
  }

  async function getAnimalsData() {
    const animals = await axios.get('http://localhost:8000/animals/');
    setAnimalList(animals.data);
  }
  
  /*
  useEffect(() => {
    setAnimalList(animals.map(object => {
      return object;
    }));
  }, []);
  */

  useEffect( () => {
    getAnimalsData();
    getAnimalTypesData();
  }, []);

  const refresh = () => {
    window.location.reload();
  }

  function addNewAnimal(newAnimal) {
    //setAnimalList([...animalList, newAnimal]);

    let animalTypeExists = false;
    let animalType;

    for (let i = 0; i < animalTypeList.length; i++) {
      if (animalTypeList[i].name === newAnimal.type) {
        animalTypeExists = true;
        animalType = animalTypeList[i];
      }
    }

    if (!animalTypeExists) {
      axios.post('http://localhost:8000/animaltypes/', {'name': newAnimal.type}).then(refresh);
      animalType = animalTypeList[-1];
    }
    
    axios.post('http://localhost:8000/animals/', {
      'name': newAnimal.name, 
      'type': animalType, 
      'age': newAnimal.age, 
      'gender': newAnimal.gender
    }).then(refresh);
  }

  function deleteAnimal(id) {
    //setAnimalList(animalList.filter(animal => animal.id !== id));
    axios.delete('http://localhost:8000/animals/' + id + '/').then(getAnimalsData);
  }

  return (
    <div className="App">
      
      <h1>FJØSET</h1>

      <AnimalTable animals={animalList} animalTypes={animalTypeList} onDeleteAnimal={deleteAnimal} />

      <AddAnimal onNewAnimal={addNewAnimal} />

    </div>
  );
}

export default App;
