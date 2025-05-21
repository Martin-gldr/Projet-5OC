import { NavLink } from "react-router";
import logo from '../../../assets/logo/LOGO-R.svg'
import logos from '../../../assets/logo/LOGO-R-S.svg'
import './Header.scss'
function Header() {
    return(
        
        <div className="header">
            <div className="desk">
                <img  src={logo} />
                <nav>
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/APropos"> A Propos</NavLink>
                </nav>
            </div>
            <div className="phone">
                <img src={logos} />
                <nav> 
                    <NavLink to="/">ACCUEIL</NavLink>
                    <NavLink to="/APropos"> A PROPOS</NavLink>
                </nav>
            </div>
        </div>
        
        
    )
}
export default Header