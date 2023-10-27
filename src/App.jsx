import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './contex/UserContext';

function App() {
 
  const  {users}  = useContext(UserContext);
  console.log(users)

  

  return (
  <>
  
  <h1 className='text-5xl font-black py-5 '> This is App</h1>
  
  </> 
  
    )
 
}

export default App;
