import { useForm } from "react-hook-form";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import '../styles/nav.css'
import user from '../images/user-solid.svg'
import cart from '../images/cart-shopping-solid.svg'
import heart from '../images/heart-regular.svg'
import Home from '../pages/home'
import About from '../pages/about'
import Shop from '../pages/shop'
import New from '../pages/new_arivals'
import Contact from '../pages/contact'
import ShowProduct from './ShowProduct'
import { ProductContext } from "../App";
import { useContext } from 'react'
import { useSelector } from 'react-redux';
import Cart from './Cart'
import Wishlist from './Wishlist'
import Login from './Login'
import Register from './Register'

// import {useNavigate} from 'react-router-dom'




const Nav = ({ getProducts }) => {
    const data = useContext(ProductContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    const state = useSelector((state) => state.handleCart)
    const wishState = useSelector((state) => state.handleWishList)
    // const navigate = useNavigate()

    return (
        <>
            <BrowserRouter>
                <nav className="top-nav">
                    <form onSubmit={handleSubmit(onSubmit)} className="search">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input {...register('search')} placeholder="Search" />
                    </form>
                    <div className="logo">
                        <Link to='/'><h1>Le Taku</h1></Link>
                    </div>

                    <div className="account">
                        <Link to='/login'><i className="fa-solid fa-user icons"></i></Link>
                        <div className="wishlist">
                            <Link to='shop/wish_list'>
                                <p>Wishlist</p>
                                <p>({wishState.length})</p>
                                <i className="fa-regular fa-heart icons"></i>
                            </Link>
                           
                        </div>

                        <div className='cart'>
                            <Link to='/shop/cart'>
                                <p>Cart</p>
                                <i className="fa-solid fa-cart-shopping icons"></i>
                                <p>({state.length})</p>
                            </Link>

                        </div>

                    </div>

                </nav>
                <nav className='bottom-nav'>
                    <ul className='nav-items'>
                        <li><Link to='/' >HOME</Link></li>
                        <li><Link to='/about' >ABOUT</Link></li>
                        <li><Link to='/shop' >SHOP</Link></li>
                        <li><Link to='/new_arrivals' >NEW ARRIVALS</Link></li>
                        <li><Link to='/contact' >CONTACT</Link></li>

                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/shop/:id' element={<ShowProduct />} />
                    <Route path='/shop/cart' element={<Cart />} />
                    <Route path='/shop/wish_list' element={<Wishlist />} />
                    <Route path='/new_arrivals' element={<New />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </BrowserRouter>

        </>

    )
}

export default Nav