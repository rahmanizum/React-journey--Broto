import {useState} from 'react'
import Form from "./components/Form";
import Card from "./components/Card";
import Completedcard from './components/Completedcard';
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
    id:new Date().getTime(),
    heading:headingElement.value,
    details:detailsElement.value,
    date:dateElement.value,
    time:timeElement.value,
    status:false
  }
  toDosState([...toDos,data])
  myForm.reset();
  
}
const changeStatus = (e)=>{
toDos.forEach((ele)=>{
  if(ele.id===Number(e.target.id)){
    ele.status=true;
  }
})
toDosState([...toDos]);
}
const removeTask = (e)=>{
  
  let newTodos = toDos.filter((ele)=>{
     return ele.id!== Number(e.target.id)
  })
  toDosState([...newTodos])
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
            {
            toDos.map((ele,index)=>{
              return(!ele.status && <Card key={ele.id} onRemove = {removeTask} onClick = {changeStatus}{...ele}/>)
            })}
          </ul>
        </div>
          
        </div>
        <div className="col-xl-3">
          <h2>Completed Task's</h2>
          <div className='continer' style={{ overflowY: 'auto', maxHeight: '600px' }}>
        <ul className="list-group">
            {toDos.map((ele,index)=>{
              return(ele.status && <Completedcard key={index}{...ele}/>)
            })}
          </ul>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
