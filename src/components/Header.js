import Nav from "./Navbar";

const Header = () => {
    const isHeader = true
    return (
        <header className="header">
            <h1 className="header__title">Quioto Records</h1>
        
           <Nav isHeader={isHeader} />
        </header>
    )
}

export default Header;
