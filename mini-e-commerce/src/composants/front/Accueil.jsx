import { useArticle } from "../../hook/useArticle";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { authent } from "../../context/authent";
import { formulaire } from "../../context/formulaire";

const Home = () => {
   
    const [articles] = useArticle()
    const { cart, addToCart } = useContext(authent);
    
    const {submitted, setSubmitted} = useContext(formulaire);

    return ( <div className="row">
        <h1>Découvrez nos articles !</h1>
        {articles.map(article => {
            return <article className="col-4 mb-4"  key={article.id}>
                <div className="card">
                    <h2 className="card-header">{article.titre}</h2>
                    <img src={article.img} alt="" className="img-fluid txt-center" />
                    <div className="card-body">
                        {article.contenu }
                    </div>
                <footer className="card-footer d-flex justify-content-between" >
                        <button className="btn border-primary text-primary m-1 " onClick={() => addToCart(article)}>
                            Ajouter au panier
                        </button>
                       
                        <p className="m-1 fw-bold fs-4">
                            { new Intl.NumberFormat("fr-FR", { style: 'currency', currency: 'EUR' }).format(article.prix)}
                        </p>
                    </footer>
                </div>
            </article>
        })}
    </div> );
}


export default Home;