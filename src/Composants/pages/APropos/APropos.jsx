import Banner from '../../réutilisable/Banner/Banner'
import Collapse from '../../réutilisable/Collapse/Collapse'
import Footer from '../../réutilisable/Footer/Footer'
import Header from '../../réutilisable/Header/Header'
import './APropos.scss'
import src from '../../../assets/images/bannerAPropos.png'
function APropos() {
    return (
      <>
      <Header />
      <main className='main-APropos'>
        <Banner className="bannerImg" src={src} />
        <div className='collapse-container'>
        <Collapse content="Fiabilité" description="Les annonces postées sur Kasa garentissent une fiablité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"/>
        <Collapse content="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation entrainera une exclusion de notre plateforme"/>
        <Collapse content="Service" description="La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de bienveillance et de respect"/>
        <Collapse content="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond au critères de sécurité établis par nos services. En laissant une note aussi bien a l'hôte qu'au locataire, cela permet à nos équipes de verfifier que les standards sont bien respectés. Nous organisons également des ateliers sur le sécurité domestique pour nos hôtes."/>
        </div>
      </main>
      <Footer />
      </>
    )
  }
  
  export default APropos