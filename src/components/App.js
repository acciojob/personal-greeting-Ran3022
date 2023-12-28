
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [count,setCount] = useState(0);

  return (
    <div>
       <p>Button Clicked {count} times</p>
       <button onClick={()=>setCount(count+1)}>Click Me</button>
    </div>
  )
}

export default App
