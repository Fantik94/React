import { Link, Outlet } from "react-router-dom";
import Menu from "./composants/Menu";
import AuthContextProvider from "./context/authent";

const App = () => {
  //console.log(process.env.REACT_APP_API)
 // console.log(import.meta.env.VITE_API)
  return ( <div className="page">
    <Menu />
    <div className="container">
      <Outlet />
    </div>
    <footer className="text-center mb-3 footer-dark">
    </footer>
  </div> );
}
 
export default App;