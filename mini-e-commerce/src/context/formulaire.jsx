import { createContext , useState } from "react"
import React from "react";
import { authent } from "./authent";
import axios from "axios";
import { useContext } from "react";


export const formulaire = React.createContext();

export function FormProvider({children}) {
    const [formData, setFormData] = useState({ nom : "", email : "", adresse: "", commentaire :""});
    const [formDataCopy, setFormDataCopy] = useState({nom : "", email : "", adresse: "", commentaire :""});
    const [submitted, setSubmitted] = useState(false);
    const { cart, removeFromCart } = useContext(authent);

    function handleChange(event) {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
      setFormDataCopy({...formData, [name]: value});
    }

    const postDataToFirebase = async (cart, formData) => {
      try {
          const res = await 
          axios.post(`${import.meta.env.VITE_API}commandes.json`, {cart, formData});
          console.log(res.data);
      } catch (err) {
          console.error(err);
      }
  }

    function handleSubmit(event) {
      event.preventDefault();
      
      if (cart.length > 0) {
        setSubmitted(true);
        postDataToFirebase(cart, formData);
      } else {
        alert("Panier vide : ajoutez des articles.");
      }
      setFormData({ name: '', email: '', address: '', comments: '' }); 
    }
  
    return (
      <formulaire.Provider value={{ formData, formDataCopy, handleChange, handleSubmit, submitted }}>
        {children}
      </formulaire.Provider>
    );
  }


  export default FormProvider ; 