import { useState } from 'react';
import Header from './components/Header'
import ClickButton from './components/Button'
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)
  const increaseCount1 = ()=>{
    setCount(count+1)
    
  }
  const increaseCount2 = ()=>{
    setCount(count+2)
  }
  return (
    <div className='pt-3 text-center'>
      <Header/>
      <ClickButton onClick={increaseCount1} />
      <br />
      <button onClick={increaseCount2} className=' btn btn-primary p-2'> Increase 2</button>
      <h3 className='text-center' id='count'> count = {count}</h3>

      <Form state={setCount}/>
    </div>
  )
}

export default App;


