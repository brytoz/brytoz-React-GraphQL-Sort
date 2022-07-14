import * as React from "react";
import { Routes, Route } from "react-router-dom"; 

// import Search from "./components/Search";
import AllPlayers from "./Pages/AllPlayers";
import Unavailable from "./Pages/Unavailable";
import Available from "./Pages/Available";
import Error from "./Pages/Error";

// import Loading from './components/Loading'

{/* <Search /> */}


export default function Pages() { 
  return(
    <>
      <Routes>
        <Route index  element={<AllPlayers />} /> 
        <Route path="/Available"  element={<Available /> } />
        <Route path="/Unavailable" element={<Unavailable />} />
        <Route path="*" element={<Error />} /> 
      </Routes>
    </>
  );
}



