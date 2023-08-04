import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import {Home} from './components/home'
import {Show} from './components/show'

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path = "/search" element = {<Show/>} />
        </Routes>
      </Router>        
    </div>
  );
}

export default App;
