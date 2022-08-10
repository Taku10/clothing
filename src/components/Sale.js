 import '../styles/sale.css';

 import {Link, useNavigate} from 'react-router-dom'



const Sale = () => {
    const navigate = useNavigate()
    return (
        <div className="sale-container">
            <div className="heading-sale">
                <hr />
                <h2>Big Sale!</h2>
            </div>
            <div className="content-sale-wrapper">
                <div className="sale-image">

                </div>
                <div className="sale-content">
                    <h3>50% less in all items</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?
                    </p>
                    <button className='sale-button' onClick={navigate('/shop')}>SHOP NOW</button>
                </div>
            </div>
        </div>

    )

    }
    export default Sale