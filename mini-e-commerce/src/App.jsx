import { Outlet } from "react-router-dom";
import Menu from "./composants/Menu";


const App = () => {
  
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