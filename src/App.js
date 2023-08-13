import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import {Home} from './components/home'
import {Show} from './components/show'
import { Navbar } from './components/navBar';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Router>

        <Routes>
          <Route path="/"  element={<Home/>} />
          <Route path = "/sort/bubble" element = {<Show/>} />
        </Routes>
      </Router>        
    </div>
  );
}

export default App;
