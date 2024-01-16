
import React, { useState } from "react";
import './../styles/App.css';
import Greetings from  './greeting' ;              //import GreetingForm from './GreetingForm';

const App = () => {

  return (
    <div>
    <h1>Personalized Greeting App</h1>
    <Greetings />
  </div>
  );
}

export default App
