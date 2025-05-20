import { NavLink } from "react-router";
import logo from '../../assets/logo/LOGO-3.png'
import './Header.scss'
function Header() {
    return(
        
        <div className="header">
            <img src={logo} />
            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/APropos"> A Propos</NavLink>
            </nav>
        </div>
        
        
    )
}
export default Header