import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

export const Contador = () => {

  // let number = 0;

  const [add, setadd] = useState(0);

  const HandleClick = () => {
      setadd(add + 1);
  }
  
  const HandleClickSub = () => {
      setadd(add - 1);
  }

  const handleInput = (event) => {
    setadd(event.target.value);
    
}


  return (
    <div>
      <h1>
      Contador
      </h1>
      <input type="text" value={add} onChange={handleInput}/>

      <br></br>
    
      <Button variant="primary" onClick={HandleClick}>SOMA = {add}</Button>
      <br></br>

      <Button variant="danger" onClick={HandleClickSub}>SUBTRAÇÃO =  {add}</Button>
    </div>
  )
}
