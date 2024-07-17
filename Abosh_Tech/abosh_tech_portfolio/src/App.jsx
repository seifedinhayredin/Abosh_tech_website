import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header"
import Main from "./components/Main"
import About from "./components/About"

import Contact from "./components/Contact";
import Service from "./components/Service";


const App = () => {
    return (
      <>
     
        <Router>
        <Header />
        <Routes>
          
          <Route path="/" element={<Main />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </Router>

     
      </>
      
    );
  };
  
  export default App;