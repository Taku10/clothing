import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import '../styles/show_product.css'
import { toRand } from './Featured'
import star from '../images/star-solid.svg'
import { addCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import Cart from './Cart'
import { useNavigate } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import toast, { Toaster } from 'react-hot-toast';
import {ShowProductLoading} from './Skeleton'



const ShowProduct = (props) => {
    const { id } = useParams()
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false)
    const url = ` https://fakestoreapi.com/products/${id}`

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const addProduct = (item) => {
        dispatch(addCart(item))
    }

    const notify = () => toast.success("Added to Cart !!", { duration: 4000, position: 'bottom-right' });

    const cartAdd = () => {
        addProduct(item)
        notify()
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
                        <p className='price'> R {Math.round(item.price * toRand)}</p>
                        <div className='description'>
                            <p>{item.description}</p>
                        </div>
                        <div className='rating'>
                            {item.rating ? <p>Rating: {item.rating.rate}</p> : null}
                            <img src={star} alt="" />
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
