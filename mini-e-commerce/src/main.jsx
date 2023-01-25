import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css";

import {  BrowserRouter , Routes , Route } from "react-router-dom"
import Acceuil from './composants/front/Acceuil';
import Panier from './composants/front/Panier';
//import Commande from './composants/front/Commande';
import NotFound from './composants/front/NotFound';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Acceuil />} />
          <Route path='Acceuil' element={<Acceuil />} />
          <Route path='Panier' element={<Panier />} />
        
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
  </BrowserRouter>
)