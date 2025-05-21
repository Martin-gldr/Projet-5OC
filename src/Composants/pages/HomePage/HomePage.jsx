import './HomePage.scss'
import Header from '../../réutilisable/Header/Header'
import Banner from '../../réutilisable/Banner/Banner'
import Footer from '../../réutilisable/Footer/Footer'
import CardBoard from '../../réutilisable/CardBoard/CardBoard'
import src from '../../../assets/images/bannerHome.png'
function HomePage() {
  return (

    <>

      <Header />

      <main>
        <Banner className="banner" src={src}/>
        <CardBoard />
      </main>

      <Footer />

    </>
  )
}

export default HomePage
