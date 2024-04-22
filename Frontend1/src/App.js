import logo from './logo.svg';
import './App.css';
import Landing from './screens/landing';
import Game from './screens/game';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='bg-slate-900 h-screen'>
        <BrowserRouter>
      <Routes>
        <Route path="/"  element ={<Landing/>}/> 
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
