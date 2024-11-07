import React from 'react';
import Animals from './Animals';
import { AnimalsProvider } from './AnimalsContext';
import Animal from './Animal';

// AnimalsProvider 하위 요소에게 context를 제공한다.
const AnimalsConatiner = () => {
  return (
    <div>
      <AnimalsProvider>
        <Animal/>
      </AnimalsProvider>
    </div>
  );
};

export default AnimalsConatiner;