import React from 'react';
import Nav from '../components/Nav';
import add from '../utils/add';

const Index = () => {
  const sum = add(5, 3);

  return (
    <div>
      <h1>Nav MFE2:</h1>
      <Nav />
      <p>Sum of 5 + 3 = {sum}</p>
    </div>
  );
}

export default Index;