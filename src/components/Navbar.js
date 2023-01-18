import { NavLink } from "react-router-dom"


const Nav = (props) => {

const isHeader = props.isHeader || false
const textLinkFooter =props.textLinkFooter ||""
const hrefLinkFooter =props.hrefLinkFooter ||""

   if (isHeader)
    return(
        <nav className="header__navbar">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/ropa">Ropa</NavLink>\
    <NavLink to="/ropa/femenina">Ropa femenina</NavLink>
        <span className="material-icons">shopping_cart</span>
    </nav>
    )

    else {
        return (
            <nav className="header__navbar">
                <a href={props.hrefLinkFooter}>{props.textLinkFooter}</a>
        
            </nav>
        )
    }
}
export default Nav;