import React from 'react';
import Card from './components/Card';
 function App() {
let objArr = [{
  name: "John Doe",
  image:"1",
  bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quo ipsum amet optio perspiciatis qui!",
},{
  name: "Jane Smith",
  image:"2",
  bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ad culpa rem rerum aliquam tempora!"
}]

  return (
    <div className="text-center p-3">
      <h1>Hello World!</h1>
      <div className='d-flex justify-content-around'>
      {objArr.map((obj,index)=>{
        return(<Card key = {index}{...obj}/>)
      })}
      </div>
    </div>
  );
}

export default App;
