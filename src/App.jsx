import React from 'react';
import './App.css'
import Form from './components/Form';
import Time from './components/Time';
import Counter from './components/UseReducer/Counter';
import ComplexCounter from './components/UseReducer/ComplexCounter';

function App() {
  return (
    <>
     <Counter/>
     <Time/>
     <Form/>
     <ComplexCounter/>
    </>
  )
}

export default App
