import { useArticle } from "../../hook/useArticle";

const Acceuil = () => {
    
    const [articles] = useArticle()
  
    return ( <div className="row">
        <h1>Catalogue</h1>
        {articles.map(article => {
            return <article className="col-4"  key={article.id}>
                <div className="card">
                    <h2 className="card-header">{article.titre}</h2>
                    <div className="card-body">
                        {article.contenu }
                    </div>
                    
                    <footer className="card-footer d-flex justify-content-between">
                        <button className="btn border-primary text-primary" onClick={() => test}>
                            <span>Ajouter au panier</span>
                        </button>
                            <h3><strong>{article.prix}€</strong></h3>
                    </footer>
                </div>
            </article>
        })}
    </div> );
}

export default Acceuil;