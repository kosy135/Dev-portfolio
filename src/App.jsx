import React from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Artpage from "./pages/Artpage";

export default function App() {
  return (
    <div>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/artpage' element={<Artpage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
