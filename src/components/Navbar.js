const Nav = (props) => {

const isHeader = props.isHeader || false
const textLinkFooter =props.textLinkFooter ||""
const hrefLinkFooter =props.hrefLinkFooter ||""

   if (isHeader)
    return(
        <nav className="header__navbar">
        <a className ="header__link" href="">link</a>
        <a className ="header__link" href="">link</a>
        <a className ="header__link" href="">link</a>
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