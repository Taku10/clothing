import { Link } from 'react-router-dom';
import '../styles/footer.css'
import { useState } from 'react'
import promo_shoes from '../images/hero-sneakers.jpg'

const Footer = (props) => {
    const [email, setEmail] = useState('')


    return (

        <footer>
            <div className='footer-container'>
                <div className='navigation-wrapper'>
                    <h3>Navigation</h3>
                    <ul className='footer-nav-items'>
                        <li><Link to='/' >Home</Link></li>
                        <li><Link to='/about' >About</Link></li>
                        <li><Link to='/shop' >Shop</Link></li>
                        <li><Link to='/new_arrivals' >New Arrivals</Link></li>
                        <li><Link to='/contact' >Contact</Link></li>
                    </ul>
                </div>
                <div className="promo-wrapper">
                    <h3>Promo</h3>
                    <div className="promo-info">
                        <img src={promo_shoes} alt="shoes" />
                        <p className='promo-text'>Finding Your Perfect Shoes</p>
                        <p>Promo from July 23 - 01 August 2022</p>
                    </div>
                </div>
                <div className='contact-info-wrapper'>
                    <h3>Contact Info</h3>
                    <div className='details'>
                        <div className='location'>
                            <i className="fa-solid fa-location-dot"></i>
                            <div className='address'>
                                <p>101 Church Street,Cape Town,</p>
                                <p>Western Cape, South Africa</p>
                            </div>
                        </div>
                        <div className='phone-number'>
                            <i className="fa-solid fa-phone"></i>
                            <p>+27 27 234 4345</p>
                        </div>
                        <div className='email'>
                            <i className="fa-solid fa-envelope"></i>
                            <p>info@letaku.com</p>
                        </div>
                    </div>

                    <div className='subscribe'>
                        <h3>Subscribe</h3>
                        <input type="text" placeholder='Email' name='email' value={email} onChange={e => setEmail(e.target.value)} />
                        
                    </div>
                </div>
                
            </div>
            
        </footer>



    )
}

export default Footer
