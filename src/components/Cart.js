import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import '../styles/cart.css'
import { toRand } from './Featured'
import { useNavigate } from 'react-router-dom'
import { delCart } from '../redux/action';
import { decreaseCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import toast, { Toaster } from 'react-hot-toast';
import {CartLoading} from './Skeleton'


const Cart = () => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const url = 'https://fakestoreapi.com/products/'
    const state = useSelector((state) => state.handleCart)//From redux


    const navigate = useNavigate() //for navigation
    const dispatch = useDispatch() //redux

    // fetch data
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(url)
            setProduct(await response.json());
            setLoading(false)
        }
        getProduct()
    }, [])

    //Toast notification function
    const notify = () => toast.success("Removed from Cart !!", { duration: 4000, position: 'bottom-right' });

    //increase product qty
    const addProduct = (item) => {
        dispatch(addCart(item))
    }

    //decrease product qty
    const decreaseProduct = (item) => {
        dispatch(decreaseCart(item))
    }

    const removeCart = (product) => {
        dispatch(delCart(product)) //remove items from cart
    }

    const removeMessage = () => {
        removeCart()
        notify()
    }
   

    //Get cart total
    let cart_total = 0;
    const cartTotal = () => {
        state.map((item) => {
            cart_total += item.price * item.qty;
        })
        return cart_total
    }
    cartTotal()
    

    // Show product after skeleton finished loading
    const ShowProducts = () => {
        return (
            <>
                {state.length === 0 ? <Empty /> : state.map((item) => (
                    <div className='cart-grid' key={item.id}>
                        <i className="fa-solid fa-x remove" onClick={() => removeCart(item)}></i>
                        <div className='cart-grid-item-left'>
                            <img src={item.image} alt="" />
                        </div>
                        <div className='cart-grid-item-right'>
                            <h3>{item.title}</h3>
                            <div className='qty-price'>
                                <p className='qty'>{item.qty}</p>
                                <p>X</p>
                                <p className='price'> R {item.price * toRand.toFixed(0)}</p>
                            </div>
                            <div className='counter'>
                                <button className='decrease' onClick={() => item.qty === 1 ? removeCart(item) : decreaseProduct(item)}>-</button>
                                {<p className='counter-number'>{item.qty}</p>}
                                <button className='add' onClick={() => addProduct(item)}>+</button>
                            </div>
                            <div className='item-total'>
                                <h2>R {Math.round(item.qty * item.price * toRand)}</h2>
                            </div>
                        </div>
                    </div>
                ))}

                {state.length === 0 ? null :
                    <>
                    <div className='total-proceed'>
                    <div className='proceed-checkout'>
                            <button>Proceed to checkout</button>
                        </div>
                        <div className='cart-total'>
                            <h1>Total: R {Math.round(cart_total * toRand)}</h1>
                        </div>
                    </div> 
                    </>
                }
            </>
        )
    }

    // Message if cart is empty
    const Empty = () => {
        return (
            <>
                <div className='empty-container'>
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
                        <button onClick={() => navigate('/shop')}>Return to Shopping</button>
                    </div>
                </div>
            </>
        )
    }

    //loading condition
    return (
        <div className='cart-container'>
            <div className='cart-wrapper'>
                {loading ? <CartLoading /> : <ShowProducts />}
            </div>
            <div>
                <Toaster />
            </div>
        </div>
    )
}

export default Cart