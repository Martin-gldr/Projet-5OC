import './HomePage.scss'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import CardBoard from '../CardBoard/CardBoard'
import src from '../../assets/images/bannerHome.png'
function HomePage() {
  return (

    <>

      <Header />

      <main>
        <Banner content="Chez vous, partout et ailleurs" className="banner" src={src}/>
        <CardBoard />
      </main>

      <Footer />

    </>
  )
}

export default HomePage
