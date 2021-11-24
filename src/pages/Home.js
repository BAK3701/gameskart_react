import Header from '../components/Header'
import Slideshow from '../components/Slideshow'
import Intro from '../components/Intro'
import Topsellers from '../components/Topsellers'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div className = "home">
            <Header />
            <Intro />
            <Slideshow />
            <Topsellers />
            <Footer />
        </div>
    )
}

export default Home
