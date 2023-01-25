import { NavLink , useNavigate } from "react-router-dom"

function Menu() {
    return ( 
        <div className="bg-dark mb-3">
            <nav className="navbar navbar-expand navbar-dark container">
                <span className="navbar-brand fs-3">
                    Mini E commerce
                </span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/Acceuil" className="nav-link">Catalogue</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                        <NavLink to="/Panier" className="nav-link">Panier <i class="fi fi-rr-shopping-cart"></i></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
//test

export default Menu;