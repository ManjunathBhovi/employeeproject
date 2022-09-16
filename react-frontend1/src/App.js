import './App.css';
import {MemoryRouter as Router, Route, Routes} from 'react-router-dom'; 
import ListEmployeeComponent from './components/ListEmployeeComponent';
import { useState } from 'react'
import RegisterEmployee from './components/RegisterEmployee';


function App() {

  const [isLogged, setIsLogged] = useState(false)

  return (
    <div>
      <Router>
        <div className='container'>
        <Routes>
          <Route exact path='/List' element={<ListEmployeeComponent/>}></Route>
          <Route path='/' element={<RegisterEmployee/>}></Route>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
