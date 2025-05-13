import './HomePage.scss'
import Header from '../Header/Header'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import CardBoard from '../CardBoard/CardBoard'
function HomePage() {
  return (

    <>
      <header>
        <Header />
      </header>
      <main>
        <Banner />
        <CardBoard />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default HomePage
