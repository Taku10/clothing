import '../styles/featured.css'
import tshirt from '../images/tshirt-mockup.jpg'
import polo_shirt from '../images/polo-shirt.jpg'
import chucks from '../images/chucks-shoes.jpg'
import { ProductContext } from '../App'
import { useContext } from 'react'

export const toRand = 16.58;

const Featured = (props) => {

    const data = useContext(ProductContext);
   

    return (
        <div className="featured-container">
            <div className='heading-featured'>
                <hr />
                <h2>Featured Products</h2>
            </div>
            <div className='slide-container'>
             
                    <div className='item-1'>
                        {data[0] ?<img src={data[0].image} alt="polo shirt" />:null}
                        <div className='item-info'>
                            {data[0] ? <h3>{data[0].title}</h3>:null}
                            
                            {data[0]?<p className='product-price'>R {data[0].price * toRand.toFixed(0)}</p>: null}
                        </div>
                    </div>
                

                <div className='item-2'>
                {data[19] ?<img src={data[19].image} alt="polo shirt" />:null}
                    <div className='item-info'>
                    {data[19] ? <h3>{data[19].title}</h3>:null}
                        {/* <p className='product-name'>Finding perfect products</p> */}
                        {data[19]?<p className='product-price'>R {data[19].price * toRand.toFixed(0)}</p>: null}
                    </div>
                </div>
                <div className='item-3'>
                {data[3] ?<img src={data[3].image} alt="polo shirt" />:null}
                    <div className='item-info'>
                    {data[3] ? <h3>{data[3].title}</h3>:null}
                        {/* <p className='product-name'>Finding perfect products</p> */}
                        {data[3]?<p className='product-price'>R {data[3].price * toRand.toFixed(0)}</p>: null}
                    </div>
                </div>
            </div>
            <div className='slide-arrows'>
                <i class="fa-solid fa-arrow-left arrow-left"></i>
                <i class="fa-solid fa-arrow-right arrow-right"></i>
            </div>


        </div>
    )
}

export default Featured
