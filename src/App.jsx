import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./component/navbar";
import Bisection from "./page/Bisection.jsx";
import Graphical  from "./page/Graphical";
import Falseposition from "./page/Falseposition"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path="/graphical" element={<Graphical/>} />
        <Route path="/bisection" element={<Bisection/>} />
        <Route path="/falseposition" element={<Falseposition/>} />
      

      </Routes>
    </BrowserRouter>
  );
}