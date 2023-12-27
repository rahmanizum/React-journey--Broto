import {useState} from 'react'
import Form from "./components/Form";
import Card from "./components/Card";
function App() {
const [toDos,toDosState] = useState([]);
const [toDo,toDoState] =useState("");
const addToDo= (e)=>{
  toDoState(e.target.value)
}
const displayToDo = (e)=>{
  e.preventDefault();
  toDosState([...toDos,toDo])
}
  return (
    <div className="text-center mt-2">
      <h1>Todo Project by <span className="lead">Mufil Rahman A</span></h1>
      <hr className="my-4" />
      <div className="row mt-3 d-flex d-flex justify-content-around">
        <div className="col-md-3">
        <Form onChange = {addToDo} onClick ={displayToDo}/>
        </div>
        <div className="col-md-3">
        <h2>Upcoming Task's</h2>
          <ul className="list-group">
            {toDos.map((ele,index)=><Card key={index}title={ele}/>)}
          </ul>
          
        </div>
        <div className="col-md-3">
          <h2>Completed Task's</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
