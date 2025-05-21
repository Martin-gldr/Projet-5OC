
import { NavLink } from 'react-router'
import Footer from '../../réutilisable/Footer/Footer'
import Header from '../../réutilisable/Header/Header'
import './Erreur404.scss'

function Erreur404() {
    return (
      <>
      <Header />
      <main>
        <div className='erreur404'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink className="nav-link" to="/"> Retourner sur la page d'accueil </NavLink>
        </div>
      </main>
      <Footer />
      </>
    )
  }
  
  export default Erreur404