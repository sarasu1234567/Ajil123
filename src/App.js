import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup';
//import Login from './components/Login';
import Navigationbar from './components/Navigationbar';
import Login from './components/Login';
import {BrowserRouter, Route, Routes, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigationbar/>
      <BrowserRouter>
      <Navigationbar/>
      <Routes>
     <Route path='/Login' element={<Login/>}></Route>
     <Route path='/Signup' element={<Signup/>}></Route>
     
      </Routes>
      </BrowserRouter>

      {/* <Login/> */}
    </div>
   
  );
}

export default App;
