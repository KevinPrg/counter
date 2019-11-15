import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const [count, setCount] = useState(0);

  const handleChange = (event) => {
    setCount(parseInt(event.target.value))
  }

  return (
    <div>
      <p>Le compteur est  à : {count} </p>
      <input type="number" value={count} onChange={handleChange} ></input>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}

export default Counter;
