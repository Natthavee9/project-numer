import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useState } from "react";
import CalBisection from "./page/Bisection";
import Navbar from "./component/navbar";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/bisection" element={<CalBisection/>}/>
      

      </Routes>
    </BrowserRouter>
  );
}


