import React from 'react';
import add from '../utils/add';

const Index = () => {
  const sum = add(5, 3);

  return (
    <div>
      <h1>Index (Remote 3001) :</h1>
      <p>Calculation in remote 3001 with its own functions: Sum of 5 + 3 = {sum}</p>
    </div>
  );
}

export default Index;