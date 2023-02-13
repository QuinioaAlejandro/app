import { NavLink } from "react-router-dom"

const Error = () => {
    return(
      <div className="error">
       <img src="../img/404.png" alt="error"/>
       <NavLink  to="/"> <img src="/../img/volver.png" alt="girls"></img></NavLink>
       </div>
    )
}

export default Error