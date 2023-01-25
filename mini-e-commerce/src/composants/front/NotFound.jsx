import { Link } from "react-router-dom";

const NotFound = () => {
    return ( <>
        <h1 className="p-3 display-2 text-center ">ERROR 404 <small><br></br>page introuvable</small></h1>
        
         <div className="text-center">
            <img src="error.gif" alt="" className="rounded mb-5"/>
         </div>
         <Link to={'/acceuil'} className="btn btn-success d-flex justify-content-center">Retourner sur l'acceuil</Link>
         
    </> );
}
 
export default NotFound;