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
import CompositeTrapezoidal from "./page/CompositTrapezoidal";
import SimsonRule from "./page/SimsonRule";
import CompositeSimson from "./page/CompositeSimson";
import Test from "./page/Test"



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
        <Route path="/compositetrapezoidal" element={<CompositeTrapezoidal/>} />
        <Route path="/simson" element={<SimsonRule/>} />
        <Route path="/compositesimson" element={<CompositeSimson/>} />
        <Route path="/test" element={<Test/>} />
      
  
        {/*Diff*/}


      </Routes>
    </BrowserRouter>
  );
}