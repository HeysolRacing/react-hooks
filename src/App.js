import React from 'react';
import CheckBoxSample from './components/CheckBoxSample';
import StarSample from './components/StarSample';
import ButtonSample from './components/ButtonSample';
import './App.css';

const App = () => {
   return(
    <div>
      <h1>Learning React Hooks!!</h1>
      <ButtonSample/>
      <CheckBoxSample/>
      <StarSample/>      
    </div>
  )
}

export default App;
