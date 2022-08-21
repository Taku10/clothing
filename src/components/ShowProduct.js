import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import '../styles/show_product.css'
import { toRand } from './Featured'
import star from '../images/star-solid.svg'
import { addCart } from '../redux/action';
import Cart from './Cart'
import { useNavigate } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import toast, { Toaster } from 'react-hot-toast';
import { ShowProductLoading } from './Skeleton'
import {useSelector, useDispatch} from 'react-redux';
import {addWish, delWish} from '../redux/action'




const ShowProduct = (props) => {
    const { id } = useParams()
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false)
    const url = ` https://fakestoreapi.com/products/${id}`

    const wishState = useSelector((state)=> state.handleWishList)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const notify = () => toast.success("Added to Cart !!", { duration: 4000, position: 'bottom-right' });
    const wishNotify =() => toast('Added to Wish List !!', { duration: 4000, position: 'bottom-right' });
    const delNotify =() => toast.warning('Removed from Cart!!', { duration: 4000, position: 'bottom-right' });


    const addProduct = (item) => {
        dispatch(addCart(item))
    }

    const cartAdd = () => {
        addProduct(item)
        notify()
    }

    const configWish = (item)=>{
        dispatch(addWish(item))
        console.log(item)
    }

    const addWishItem = () => {
        configWish(item)
        wishNotify()
    }

    const delFromWish = (item) => {
        dispatch(delWish(item))
    }

    const removeWish=(item) => {
        delFromWish(item)
        delNotify()
    }

    

    

    
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            const response = await fetch(url)
            setItem(await response.json());
            setLoading(false)
        }

        getProduct()
    }, [])


    const ShowItem = () => {
        return (
            <>
                <div className='product'>
                    <div className='product-image'>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='product-details'>
                        {item.category ? <h3 className='category'>{item.category.toUpperCase()}</h3> : null}
                        <h2 className='title'>{item.title}</h2>
                        <div className='wish-price'>
                            <p className='price'> R {Math.round(item.price * toRand)}</p>
                            {wishState.find((x)=> x.id === item.id) ?<i class="fa-solid fa-heart" onClick = {()=>removeWish()} ></i>:<i class="fa-regular fa-heart" onClick={()=>addWishItem()}></i>}
                        </div>

                        <div className='description'>
                            <p>{item.description}</p>
                        </div>
                        <div className='rating'>
                            {item.rating ? <p>Rating: {item.rating.rate}</p> : null}
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div className="cart">
                            <button onClick={() => cartAdd()}>Add to Cart</button>
                            <button onClick={() => navigate('/shop/cart')}>Go to Cart</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="container">
            <div className="wrapper">
                {loading ? <ShowProductLoading /> : <ShowItem />}
            </div>
            <div>
                <Toaster />
            </div>
        </div>
    )
}

export default ShowProduct
