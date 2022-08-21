import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react'
import { addCart,delWish } from '../redux/action';
import '../styles/wishlist.css'
import toast, { Toaster } from 'react-hot-toast';

const Wishlist = (props) => {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([])
    console.log(product)
    const url = 'https://fakestoreapi.com/products/'
    const wishState = useSelector((state) => state.handleWishList)
    const cartState = useSelector((state) => state.handleCart)
    const dispatch = useDispatch();
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(url)
            setProduct(await response.json());
            setLoading(false)
        }
        getProduct()
    }, [])

    const wishNotify = () => toast("Added to Wish List !!", { duration: 4000, position: 'bottom-right' });

    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    const cartAdd = (product) => {
        addProduct(product)
        wishNotify()
    }

    const delFromWish = (product) => {
        dispatch(delWish(product))
    }



    const WishLoading = () => {
        return (
            <>
                loading...
            </>
        )
    }

    const ShowWish = () => {
        return (
            <>

                {wishState.map((item) => (
                    <div className="wish-grid">
                        <div className="wish-grid-item-left">
                            <div className='image-other'>
                                <img src={item.image} alt="" />
                                <div className='title-other'>
                                    <h2>{item.title}</h2>
                                    <div className='star-rating'>
                                        <i class="fa-solid fa-star"></i>
                                        {item.rating ? <p>{item.rating.rate}</p> : null}
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='wish-grid-item-right'>
                            <div className='price-other'>
                                <p>R 3204</p>
                                <button className='add-wish' onClick={()=> cartAdd()}>Add To Cart</button>
                                <button className='remove-wish' onClick={() =>delFromWish(product)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </div>


                        </div>
                    </div>
                ))}
            </>
        )
    }

    return (

        <div className="wish-container">
            <div className="wish-wrapper">
                {loading ? <WishLoading /> : <ShowWish />}
            </div>
            <div>
                <Toaster />
            </div>
        </div>


    )
}

export default Wishlist
