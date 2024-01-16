import React, { useState } from 'react';


const Greeting = () => {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleGreet = () => {
      setGreeting(`Hello, ${name}!`);
    };
  
    return (
      <div>
        <label>
          Enter your name: 
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button onClick={handleGreet}>Greet</button>
        {greeting && <p>{greeting}</p>}
      </div>
    );
  };

  export default Greeting;