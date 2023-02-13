import { NavLink } from "react-router-dom"
import CartWidget from "./CartWidget";


const Navbar = (props) => {

return(
        <nav className="header__navbar">
         <ul className="header__lista">  
    <li className="header__link"><NavLink  to="/store/woman"> <img src="/../img/woman.png" alt="girls"></img></NavLink></li>
    <li className="header__link"><NavLink  to="/store/man"> <img src="/../img/man.png" alt="boys"></img></NavLink></li>
    <li className="header__link"> <NavLink  to="/store/all"> <img src="/../img/store.png" alt="store"></img></NavLink></li>
    <li className="header__link"> <NavLink  to="/carrito"> <CartWidget/> </NavLink></li>
    </ul>  </nav>
    )

  
}
export default Navbar;

