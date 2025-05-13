import { NavLink } from "react-router";
import './Header.scss'
function Header() {
    return(
        
        <div className="header">
            <img src="./src/assets/logo/LOGO-3.png" />
            <nav>
                <NavLink to="/">Acceuil</NavLink>
                <NavLink to="/APropos"> A propos</NavLink>
            </nav>
        </div>
        
        
    )
}
export default Header