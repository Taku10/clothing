 import '../styles/benefits.css'

const Benefits = () => {
    return (
        <div className="benefits-container">
            <div className="benefits">
                <div className="shipping">
                    <div className="truck icon">
                        <i className="fa-solid fa-truck"></i>
                    </div>
                    <div className="shipping-description">
                        <h2>FREE SHIPPING</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                        </p>
                    </div>
                </div>
                <div className="returns">
                    <div className="arrow icon">
                        <i className="fa-solid fa-arrow-rotate-right"></i>
                    </div>
                    <div className="returns-description">
                        <h2>FREE RETURNS</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                        </p>
                    </div>
                </div>
                <div className="customer">
                    <div className="question icon">
                        <i className="fa-solid fa-circle-question"></i>
                    </div>
                    <div className="customer-description">
                        <h2>CUSTOMER SUPPORT</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Benefits