import './App.css'
function App() {
  let author = "Mufil Rahman"
  return (
  <div>
    <h1 className='heading'>my first application</h1>
    <br/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sed earum veritatis, labore itaque esse.</p>
    <p>Author <span>{author}</span></p>
    <Footer/>
  </div>
  );
}

export default App;

function Footer(){
  return(
    <div>
      <p>I am footer from a function</p>
    </div>
  )
}
