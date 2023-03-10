import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import Accueil from './composants/front/Accueil';
import Panier from './composants/front/Panier';
import NotFound from './composants/front/NotFound';
import { AuthContextProvider } from "./context/authent";
import { FormProvider } from "./context/formulaire";
import {  BrowserRouter , Routes , Route } from "react-router-dom"
import Bdc from './composants/front/Bon-de-commande';

ReactDOM.createRoot(document.getElementById('root')).render(
<AuthContextProvider>
  <FormProvider>
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Accueil />} />
          <Route path='panier' element={<Panier />} />
          <Route path='bon-de-commande' element={<Bdc />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  </BrowserRouter>
  </FormProvider>
</AuthContextProvider>
)
