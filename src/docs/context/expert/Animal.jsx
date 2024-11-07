import React, { useContext, useState } from 'react';
import { AniamlsContext } from './AnimalsContext';
import Animals from './Animals';

const Animal = ({state, actions}) => {
  const { animals } = state;
  const { remove, insert } = actions;
   
  const animalList = animals.map((animal, i) => (
    <li key={i}>
      <button onClick={() => 
        { remove(i) }
      }>{ animal}</button>
    </li>
  ));
  
  return (
    <ul>
      {animalList}
    </ul>
  );
};

export default Animal;