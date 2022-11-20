import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Home } from "./Home";
import {Monitor} from "./Monitor"
import { Helmet } from './Helmet';


export const Landing=()=>{
    return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/monitor' element={<Monitor />} />
           <Route path='/helmet' element={<Helmet/>}/>
          
        </Routes>
      </BrowserRouter>
    );
}