import axios from "axios";
import {useRef} from "react"
import { verif } from "../verif/verif";
import Alert from "../Alert";
import { useAlert } from "../../hook/useAlert";
import { useContext } from "react";
import { authent} from "../../context/authent"
import { useState, useEffect } from "react";
import { formulaire } from "../../context/formulaire";
import { NavLink, useNavigate } from "react-router-dom";
import React from "react";

const Panier = () => {
    const emailRef = useRef();
    const messageRef = useRef();
    const nomRef = useRef();
    const adresseRef = useRef();
    const { cart, removeFromCart } = useContext(authent);
    const { formData, handleChange, handleSubmit, formDataCopy } = useContext(formulaire);
    const [alerte , setAlerte , getError] = useAlert(verif)
    const {submitted} = useContext(formulaire)
    const navigate = useNavigate();

    const handleFocus = () => {
        setAlerte({});
    }
    
    useEffect(() => {
        if (submitted) {
          navigate('/bon-de-commande');
        }
      }, [submitted]);

    return ( <>    
    <h1>Votre Panier</h1>
    <table className="table table-striped">
        <thead>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Nom</th>
                <th scope='col'>Prix</th>
                <th scope='col'>Action</th>
            </tr>
        </thead>
        <tbody>
         {cart.map(article => {
          return (
          <tr key={article.id}>
            <th scope="row">{article.id}</th>
            <td>{article.titre}</td>
            <td>{ new Intl.NumberFormat("fr-FR", { style: 'currency', currency: 'EUR' }).format(article.prix)}</td>
            <td>
                <button className="btn border-danger text-danger" onClick={ () => removeFromCart(article)}>Supprimer</button>
            </td>
          </tr>  
        )})}
        </tbody>
    </table>
    <hr/>
    <h2>Votre profil</h2>

    <div className="row">
            <form onSubmit={handleSubmit} className="col-12">
                <input type="text"
                    name="nom"
                    placeholder="Votre Nom"  
                    className="form-control mb-3" 
                    ref={nomRef}
                    onFocus={handleFocus}
                    onChange={handleChange}
                    />
                <input type="email" 
                    name="email"
                    placeholder="votre@email.fr"  
                    className="form-control mb-3" 
                    ref={emailRef}
                    onFocus={handleFocus}
                    onChange={handleChange}
                    />
                <input type="text" 
                    name="adresse"
                    placeholder="Rue - Code Postal - Ville"  
                    className="form-control mb-3" 
                    ref={adresseRef}
                    onFocus={handleFocus}
                    onChange={handleChange}
                    />
                <textarea 
                    name="commentaire"
                    placeholder="Votre message" 
                    className="form-control mb-3" 
                    rows={5} 
                    ref={messageRef}
                    onFocus={handleFocus}
                    onChange={handleChange}
                    ></textarea>
                <input type="submit" className="btn btn-warning" value='Commander'></input>
            </form>
            <Alert alerte={alerte} />
    </div>
    </>);
}

export default Panier;