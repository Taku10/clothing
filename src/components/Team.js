import '../styles/team.css'
import larry from '../images/larry.jpg'
import susan from '../images/susan.jpg'
import sara from '../images/Sara.jpg'
import willbur from '../images/willbur.jpg'

const Team = (props) => {
    return (
        <div className="team-container">
            <div className="team-heading">
                <hr />
                <h1>The Team</h1>
            </div>

            <div className="staff-wrapper">
                <div className='person-1'>
                    <img src={willbur} alt="willbur" />
                    <div className="name-job">
                        <h2>Wilbur Smith</h2>
                        <p>CEO/CO-FOUNDER</p>
                    </div>
                    <p className="person-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                    </p>
                </div>
                <div className='person-2'>
                    <img src={sara} alt="sara" />
                    <div className="name-job">
                        <h2>Sara Minnies</h2>
                        <p>CO-FOUNDER</p>
                    </div>
                    <p className="person-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                    </p>
                </div>
                <div className='person-3'>
                    <img src={susan} alt="susan" />
                    <div className="name-job">
                        <h2>Susan Williams</h2>
                        <p>MARKETING</p>
                    </div>
                    <p className="person-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                    </p>
                </div>
                <div className='person-4'>
                    <img src={larry} alt="larry" />
                    <div className="name-job">
                        <h2>Larry Wong</h2>
                        <p>SALES MANAGER</p>
                    </div>
                    <p className="person-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio recusandae doloribus ut fugit officia voluptate soluta.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Team
