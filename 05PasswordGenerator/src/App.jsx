// App.jsx
import React from "react";
import "./App.css"; 
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import About from "./Component/About";
import {BrowserRouter, Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>
     
      <BrowserRouter>
      <Routes>
     <Route path ="/" exact element ={<Home/>}/>
     <Route path ="/About" exact element ={<About/>}/>
     <Route path ="/Contact" exact element ={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
