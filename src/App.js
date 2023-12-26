import Header from './components/Header'
import ClickButton from './components/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let count = 0;
  const increaseCount = ()=>{
    console.log("clicked");
  }
  return (
    <div className='pt-3 text-center'>
      <Header/>
      <ClickButton onClick={increaseCount} />
      <br />
      <button onClick={increaseCount} className=' btn btn-primary p-2'> Button 2</button>
      <h3 className='text-center'> count = {count}</h3>
    </div>
  )
}

export default App;


