import '../styles/collections.css'

import React from 'react'

const Collections = (props) => {
    return (
        <div className="collections-container">
            <div className="collections">
                <div className="women-image-parent">
                    <div className="women-collections">
                        <div className="women-header">
                            <p>Collections</p>
                            <h2>Women</h2>
                        </div>
                    </div>
                </div>

                {/* <div className="children-image-parent">
                    <div className="children-collections">
                        <div className="children-header">
                            <p>Collections</p>
                            <h2>Children</h2>
                        </div>
                    </div>
                </div> */}

                <div className="men-image-parent">
                    <div className="men-collections">
                        <div className="men-header">
                            <p>Collections</p>
                            <h2>Men</h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Collections
