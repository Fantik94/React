import { useArticle } from "../../hook/useArticle";
import axios from "axios";
import {useRef} from "react"
import { contactVerif } from "../verif/verif";
import Alert from "../Alert";
import { useAlert } from "../../hook/useAlert";

const Panier = () => {

    const [articles, setArticles] = useArticle()

    const handleSupprimer = (id) => {
        axios.delete(`${import.meta.env.VITE_API}articles/${id}.json`)
             .then(() => {
                axios.get(`${import.meta.env.VITE_API}articles.json`)
                .then((reponse) => {
                    const resultat = []
                    for(const key in reponse.data){
                        if(reponse.data[key]) resultat.push({...reponse.data[key] , id : key})
                    }
                    setArticles(resultat)
                })
             })
    }

    const nomRef = useRef();
    const emailRef = useRef();
    const adresseRef = useRef();
    const messageRef = useRef();

    const [alerte , setAlerte , getError] = useAlert(contactVerif)

    const handleSubmit = (e) => {
        e.preventDefault();
        const demande = {
            nom : JSON.stringify(nomRef.current.value),
            email : emailRef.current.value ,
            adresse : JSON.stringify(adresseRef.current.value),
            message : JSON.stringify(messageRef.current.value)
        }
        
        if(getError(demande)) return ; 
        
        // envoyer les données saisies dans l'API pour enregistrement 
        axios.post(`${import.meta.env.VITE_API}contact.json`, demande)
             .then(reponse => {
                // vider le formulaire
                e.target.reset();
                // message pour remercier l'utilisateur 
                setAlerte({type : "success" , liste : ["le message est bien enregistré"] }) 
             })
             .catch(ex => setAlerte({type : "warning" , liste : ["erreur lors de l'enregistrement du message"]}))
    }

    const handleFocus = () => {
        setAlerte({});
    }

    return ( <>
        <h1>Votre Panier</h1>
        <div className="d-flex justify-content-between align-items-center mb-3">
            </div>
            <table className="table table-sm table-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nom</th>
                        <th>prix</th>
                        <th>actions</th>
                    </tr>
                </thead>
               <tbody>
                    { articles.map((article) => {
                        return <tr key={article.id}>
                            <td>{article.id}</td>
                            <td>{article.titre}</td>
                            <td>{article.prix}€</td>
                            <td>
                                <button onClick={() => { handleSupprimer(article.id) }} className="btn border-danger text-danger" >supprimer</button>
                            </td>
                        </tr>
                    }) }
                </tbody>
            </table>
            
            <hr></hr>

            <h1>Votre profil</h1>

            <form onSubmit={handleSubmit} className="col-12">
                <input type="nom" 
                    placeholder="votre nom"  
                    className="form-control mb-3" 
                    ref={nomRef}
                    onFocus={handleFocus}/>

                <input type="email" 
                    placeholder="votre@email.fr"  
                    className="form-control mb-3" 
                    ref={emailRef}
                    onFocus={handleFocus}/>

                <input type="adresse" 
                    placeholder="votre rue / code postal / ville"  
                    className="form-control mb-3" 
                    ref={adresseRef}
                    onFocus={handleFocus}/>

                <textarea  
                    placeholder="Commentaire" 
                    className="form-control mb-3" 
                    rows={5} 
                    ref={messageRef}
                    onFocus={handleFocus}></textarea>
                <input type="submit" className="btn btn-warning" value="Commander"/>
            </form>
            <Alert alerte={alerte} />
    </> );
}
 
export default Panier;