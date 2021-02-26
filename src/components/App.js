import '../styles/App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Main from './Main';
import Landing from './Landing';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path='/' exact><Landing/></Route>
        <Route path='/Start' exact><Main/></Route>
      </div>
    </Router>
  );
}

export default App;
