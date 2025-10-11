import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./component/navbar";
//root of equation
import Bisection from "./page/Bisection";
import Graphical  from "./page/Graphical";
import Falseposition from "./page/Falseposition";
import OnePoint from "./page/OnePoint";
import Secant from "./page/Secant";
import NewtonRaphson from "./page/NewtonRaphson";

//Linear Algebra


//interpolation


//Extrapolation


//Integration
import Trapezoidal from "./page/Trapezoidal";
import CompositeTrapezoidal from "./page/CompositTrapezoidal";



//Diff



export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {/* root of equation */}
        <Route path="/graphical" element={<Graphical/>} />
        <Route path="/bisection" element={<Bisection/>} />
        <Route path="/falseposition" element={<Falseposition/>}/>
        <Route path="/onepoint" element={<OnePoint/>}/>
        <Route path="/secant" element={<Secant/>}/>
        <Route path="/newtonraphson" element={<NewtonRaphson/>}/>

        {/* Linear Algebra */}
       
        
        {/* interpolation */}
        
        
        {/* Extrapolation*/}
        
        
        {/*Integration*/}
        <Route path="/trapezoidal" element={<Trapezoidal/>} />
        <Route path="/compositetrapezoidal" element={<CompositeTrapezoidal/>} />
      
        
        
        {/*Diff*/}

      </Routes>
    </BrowserRouter>
  );
}