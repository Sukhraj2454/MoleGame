import '../styles/App.css';
import Landing from './Landing' 
import Mole from './Mole';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Mole id='LMole' pos={{top:'25vw',left:'45vw'}}/>
    </div>
  );
}

export default App;
