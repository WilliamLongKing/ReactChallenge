import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login'
import Home from './home'
import './App.css';

function App() {
  
  return (
    <div className='content'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home username={'test'}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;