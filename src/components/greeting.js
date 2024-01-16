import React, { useState } from 'react';

const Greetings = () => {
  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const greeting = name ? `Hello ${name}!` : '';

  return (
    <div>
      <label>
        Enter your name: 
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default Greetings;