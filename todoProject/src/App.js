import {useState} from 'react'
import Form from "./components/Form";
import Card from "./components/Card";
function App() {
const [toDos,toDosState] = useState([]);
const displayToDo = (e)=>{
  e.preventDefault();
  let myForm = document.querySelector('#myForm')
  let headingElement = document.querySelector('#heading')
  let detailsElement = document.querySelector('#details')
  let dateElement = document.querySelector('#date')
  let timeElement = document.querySelector('#time')
  let data = {
    heading:headingElement.value,
    details:detailsElement.value,
    date:dateElement.value,
    time:timeElement.value
  }
  toDosState([...toDos,data])
  myForm.reset();
  
}
  return (
    <div className="text-center mt-2">
      <h1>Todo Project by <span className="lead">Mufil Rahman A</span></h1>
      <hr className="my-4" />
      <div className="row mt-3 d-flex d-flex justify-content-around">
        <div className="col-xl-3">
        <Form onClick ={displayToDo}/>
        </div>
        <div className="col-xl-3">
        <h2>Upcoming Task's</h2>
        <div className='continer' style={{ overflowY: 'auto', maxHeight: '600px' }}>
        <ul className="list-group">
            {toDos.map((ele,index)=><Card key={index}{...ele}/>)}
          </ul>
        </div>
          
        </div>
        <div className="col-xl-3">
          <h2>Completed Task's</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
