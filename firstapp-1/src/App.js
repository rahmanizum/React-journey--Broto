import React, { useState } from 'react';
import Card from './components/Card';

function App() {
  let objArr = [{
    name: "John Doe",
    image: "1",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quo ipsum amet optio perspiciatis qui!",
  }, {
    name: "Jane Smith",
    image: "2",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ad culpa rem rerum aliquam tempora!"
  },
  {
    name: "Mufil Rahman A",
    image: "3",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ad culpa rem rerum aliquam tempora!"
  }]
  const [state, setState] = useState(true)

  return (
    <div className="text-center p-3">
      <h1>Hello World!</h1>
      <div className='btn-group text-center pb-3'>
        <button onClick={() => setState(!state)} className='btn btn-primary '> hide/show</button>
      </div>
      <div className='d-flex justify-content-around'>
        {objArr.map((obj, index) => {
          return state && <Card key={index}{...obj} /> 
        })}
      </div>
    </div>
  );
}

export default App;
