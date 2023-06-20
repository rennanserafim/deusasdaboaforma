import './App.css';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import AppSecond from './AppSecond';



function App() {
  return (
    <BrowserRouter>
      <Routes>
   
        <Route path="second" element={<AppSecond/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
