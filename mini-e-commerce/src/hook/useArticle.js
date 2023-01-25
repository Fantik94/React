import { useState , useEffect } from "react";
import axios from "axios"

export function useArticle(){
    const [articles, setArticles] = useState([])
    useEffect( () => {
        axios.get(`${import.meta.env.VITE_API}articles.json`)
         .then( reponse => {
            const resultat = []
            for(const key in reponse.data){
                if(reponse.data[key]) resultat.push({...reponse.data[key] , id : key})
            }
            setArticles(resultat)
         })
    } , [articles.length] )

    return [articles, setArticles]  ; 
}