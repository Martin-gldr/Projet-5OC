import { useParams } from "react-router"
import './FicheLogement.scss'
import datas from '../../Data.json'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Collapse from '../Collapse/Collapse'
import Carousel from "../Carousel/Carousel";
import Rating from "../Rating/Rating";



function FicheLogement() {
  const id = useParams()

  const logement = datas.find(item => item.id === id.datasId);
  const tags = logement.tags
  const equipments = logement.equipments
  const pictures = logement.pictures
  
  return (
    <>
      <Header />
      <main className="fiche-logement"> 
        <Carousel pictures={pictures} img={logement.cover} />
        <div className="organisation">
        <div >
          <div className="titles">
            <h1>{logement.title}</h1>
            <h2>{logement.location}</h2>
          </div>
          <div className="tags">
            {tags.map((tag) => (<span key={tag} className="tag">{tag}</span>))}
          </div>
        </div>
        <div className="host-rating">
          <div className="host">
            <p> {logement.host.name}</p>
            <img src={logement.host.picture} />
          </div>

          <Rating nbStar = {logement.rating}/>
        </div>
        </div>
        <div className="current-collapse" >
          <Collapse content="Description" description={logement.description} />
          <Collapse content="Équipement" description={equipments.map((equipment) => (<span className="equipement" key={equipment}>{equipment}</span>))} />
        </div>
     </main>

      <Footer />
    </>
  )
}

export default FicheLogement