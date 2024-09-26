import React from 'react';
import Nav from '../components/Nav';
import add from '../utils/add';
import Footer from '@/components/Footer';

const Index = () => {
  const sum = add(5, 3);

  return (
    <div>
      <h1>Index (Remote) :</h1>
      <Nav />
      <p>Calculation in remote: Sum of 5 + 3 = {sum}</p>
      <Footer/>
    </div>
  );
}

export default Index;