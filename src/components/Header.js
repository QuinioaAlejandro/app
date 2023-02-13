import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = ({}) => {
   
    return (
        <header className="header">
        
           <Link to="/"> <img src="/../img/Qrecords.png" alt="qrecords"></img></Link>
       <Navbar/> 
        </header>
     
    )
}

export default Header;
