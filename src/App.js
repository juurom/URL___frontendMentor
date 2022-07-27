import './App.css';
import Navbar from './Navbar';
import Title from './Title';
import Shorten from './Shorten';
import Advanced from './Advanced';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />      
      <Title />
      <Shorten />
      <Advanced />
      <Footer />
    </div>
  );
}

export default App;
