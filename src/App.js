import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
//Cố định
import SideBar from './components/SideBar/SideBar';
import NavBar from './components/NavBar/NavBar';
//Các trang chính
import Home from './pages/Home/Home'
import MyDocument from './pages/MyDocument/MyDocument'
import Notification from './pages/Notification/Notification'
import Workspace from './pages/Workspace/Workspace'
//Danh mục
import Document from './pages/Category/Document/Document'
import Image from './pages/Category/Image/Image'
import Video from './pages/Category/Video/Video'
import Audio from './pages/Category/Audio/Audio'
import Archive from './pages/Category/Archive/Archive'
import Folder from './pages/Category/Folder/Folder'
import Shared from './pages/Category/Shared/Shared'
import RecycleBin from './pages/Category/RecycleBin/RecycleBin'

function App() {
  const [currentPage, setCurrentPage] = useState("Trang chủ");

  return (
    <BrowserRouter>
      <div className="App">
        <SideBar setCurrentPage={setCurrentPage} />
        <NavBar currentPage={currentPage} />

        <div className="main-content">
          <Routes>
            {/* Trang chính */}
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/MyDocument" element={<MyDocument />} />
            <Route path="/Notification" element={<Notification />} />
            <Route path="/Workspace" element={<Workspace />} />
            {/* Danh mục */}
            <Route path="/Document" element={<Document />} />
            <Route path="/Image" element={<Image />} />
            <Route path="/Video" element={<Video />} />
            <Route path="/Audio" element={<Audio />} />
            <Route path="/Archive" element={<Archive />} />
            <Route path="/Folder" element={<Folder />} />
            <Route path="/Shared" element={<Shared />} />
            <Route path="/RecycleBin" element={<RecycleBin />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
