import './App.css';
import TrangChu from './pages/TrangChu/TrangChu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState("Trang chủ");

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar currentPage={currentPage} />
        <SideBar setCurrentPage={setCurrentPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
