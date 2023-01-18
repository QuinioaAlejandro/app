import Nav from "./Navbar";
import { Link } from "react-router-dom";

const Header = ({}) => {
    const isHeader = true
    return (
        <header className="header">
           <Link to="/"> <h1 className="header__title">Quioto Records</h1>
           </Link> 
           <Nav isHeader={isHeader} />
        </header>
    )
}

export default Header;
