import React from 'react';
import Signin from './components/Signin';
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import './App.css';
import Home from "./pages/admin/Home";
import Tags from "./pages/admin/Tags";
import AddTags from "./pages/admin/AddTags";
import FrontendTags from "./pages/frontend/Tags";
import FrontendMessage from "./pages/frontend/Message";

function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Signin />} />
        </Routes>
        <Routes>
            <Route path="/admin" element={<Home />} />
        </Routes>
        <Routes>
            <Route path="/admin/tags" element={<Tags />} />
        </Routes>
        <Routes>
            <Route path="/admin/addtags" element={<AddTags />} />
        </Routes>
        <Routes>
            <Route path="/tags" element={<FrontendTags />} />
        </Routes>
        <Routes>
            <Route path="/message" element={<FrontendMessage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;

