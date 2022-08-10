import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import '../styles/cart.css'
import { toRand } from './Featured'
import {useNavigate} from 'react-router-dom'
import {delCart} from '../redux/action';
import {totalCart} from '../redux/action';
import { useDispatch } from 'react-redux';


const Cart = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    
    const url = 'https://fakestoreapi.com/products/'
    const state = useSelector((state)=>state.handleCart)
    const[counter, setCounter]=useState(1)
    
    const navigate= useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(url)
            setProduct(await response.json());
            setLoading(false)
        
            
        }

        getProduct()
    }, [])


    const removeCart=(product)=>{
        dispatch(delCart(product))
    }

    const subTotal =(product)=>{
        dispatch(totalCart(product))
    }
    

   

    const handleAdd=()=>{
        setCounter(prev=> prev +1)
    }

    const handleDecrease=()=>{
        setCounter(prev=> prev -1)
    }

    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const ShowProducts = () => {
        return (
            <>

                {state.length === 0 ? <Empty/>:state.map((item) =>(
                    <div className='cart-grid'>
                        <i class="fa-solid fa-x remove" onClick={()=>removeCart(item)}></i>
                        <div className='cart-grid-item-left'>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='cart-grid-item-right'>
                            <h3>{item.title}</h3>
                            <div className='qty-price'>
                                <p className='qty'>{item.qty}</p>
                                <p>X</p>
                                <p className='price'> R {item.price  * toRand.toFixed(0)}</p>
                            </div>
                            <div className='counter'>
                                <button className='decrease'>-</button>
                                <p className='counter-number'>1</p>
                                <button className='add' onClick={handleAdd}>+</button>
                            </div>
                            <div className='item-total'>
                                <h2>R {Math.round(item.qty * item.price  * toRand)}</h2>
                            </div>
                        </div>
                    </div>
                ))}

                {state.length === 0 ? null:
                <div className='proceed-checkout'>
                    <button>Proceed to checkout</button>
                </div>
    }
            </>
        )
    }

    const Empty = () => {
        return(
            <>
                <div class='empty-container'>
                    <div className='empty-title'>
                        <h1>Shopping Cart</h1>
                    </div>
                    <div className='empty-cart'>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className='empty-message'>
                        <h1>Your cart is currently empty !!</h1>
                    </div>
                    <div className='empty-return-shopping'>
                        <button onClick={()=>navigate('/shop')}>Return to Shopping</button>
                    </div>
                </div>
            </>
        )
    }


    return (
        <div className='cart-container'>
            <div className='cart-wrapper'>
                {loading ? <Loading /> : <ShowProducts />}
              
            </div>
        </div>
    )
}

export default Cart