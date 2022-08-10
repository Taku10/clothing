import { Link } from 'react-router-dom'
import '../styles/about.css'
import '../styles/benefits.css'
import Team from '../components/Team';
import Benefits from '../components/Benefits'
import Footer from '../components/Footer'


const About = () => {
  return (

    <>
      <div className="about-container">
        <div className='about-path'>
          <div className='link'>
            <p><Link to='/'>Home</Link></p>
            <span>/</span>
            <p >About</p>
          </div>
        </div>
        <div className='about-content-wrapper'>
          <div className='about-image'>

          </div>
          <div className='about-content'>
            <div className='about-heading'>
              <hr />
              <h1>How We Started</h1>
            </div>
            <div className='about-description'>
              <div className='inner-text'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repellat, dicta at laboriosam, nemo exercitationem itaque eveniet architecto cumque, deleniti commodi molestias repellendus quos sequi hic fugiat asperiores illum. Atque, in, fuga excepturi corrupti error corporis aliquam unde nostrum quas.
                </p>
                <p>
                  Accusantium dolor ratione maiores est deleniti nihil? Dignissimos est, sunt nulla illum autem in, quibusdam cumque recusandae, laudantium minima repellendus.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='other-about'>
        <Team />
        <Benefits />
        <Footer />
      </div>

    </>

  )
}

export default About
