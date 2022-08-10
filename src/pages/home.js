import '../styles/home.css'
import main_shoe from '../images/hero-sneakers-2.png'
import Benefits from '../components/Benefits'
import Collections from '../components/Collections'
import Featured from '../components/Featured'
import Sale from '../components/Sale'
import Footer from '../components/Footer'
import {Link, useNavigate} from 'react-router-dom'


const Home = (props) => {
    const navigate = useNavigate()
    return (
        <>
            <main className='home-main'>
                <div className="hero-shoe">
                    <img src={main_shoe} alt="" />
                </div>
                <div className="header">
                    <div className="header-wrapper">
                        <h1>Finding Your Perfect Shoes</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                        </p>
                        <button className="shop-now" onClick = {navigate('/shop')}>
                           SHOP NOW
                        </button>
                    </div>
                </div>
            </main>

            <div className="home-bottom-container">
                <Benefits />
                <Collections />
                <Featured />
                <Sale />
                <Footer />
               

                
            </div>
            
        </>

    )
}

export default Home;