
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  let author = "Mufil Rahman"
  return (
  <div>
    <Header />
    <Footer author={author}/>

    <Header />
    <Footer author = {"Surya Dev"}/>
    
    <br/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sed earum veritatis, labore itaque esse.</p>
    <p>Author <span>{author}</span></p>
  </div>
  );
}

export default App;


