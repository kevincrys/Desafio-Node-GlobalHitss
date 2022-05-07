import React from "react";
import Login from './Login';
import Cadastro from './Cadastro';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
   return(
     
     <BrowserRouter>
            <Routes>
               <Route path="/" element={<Login/>} />
               <Route path="/Cadastro" element={<Cadastro/>} />
            </Routes>
         </BrowserRouter>
   );
}
export default App;
