import React from 'react'
import tshirt from '../images/tshirt-mockup.jpg'
import polo_shirt from '../images/polo-shirt.jpg'
import chucks from '../images/chucks-shoes.jpg'
import '../styles/products.css'
import { ProductContext } from '../App'
import { useContext, useState, useEffect } from 'react';
import axios from 'axios'
import { toRand } from './Featured'
import { NavLink } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { ProductLoading } from './Skeleton'



const Products = (props) => {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(true)
    const url = 'https://fakestoreapi.com/products'
    let componentMounted = true;


    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch(url);
            setLoading(true);
            if (componentMounted) {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                console.log(filter)
            }
            return () => {
                componentMounted = false
            }
        }
        getProducts()
    }, [])

    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category === cat)
        setFilter(updateList)
    }

    const ShowProducts = () => {
        return (
            <>
                <div className="items-header">
                    <h2>Shop All</h2>
                    <div className="filter-dropdown">
                        <button onClick={() => setFilter(data)}>All</button>
                        <button onClick={() => filterProduct("men's clothing")}>MEN</button>
                        <button onClick={() => filterProduct("women's clothing")}>WOMEN</button>
                        <button onClick={() => filterProduct("electronics")}>ELECTRONICS</button>
                        <button onClick={() => filterProduct("jewelery")}>JEWELERY</button>
                    </div>
                </div>
                <div className='item-container'>

                    {filter.map((item) => {

                        return (
                            <div className='item' key={item.id}>
                                <div className='item-image'>
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className='desc-price'>
                                    <p className='item-title'>{item.title}</p>
                                    <p className='item-price'> R {Math.round(item.price * toRand.toFixed(0))}</p>
                                </div>
                                <div className='item-button'>
                                    <NavLink to={`/shop/${item.id}`}><button>Buy</button></NavLink>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }

    return (
        <>
            {loading ? <ProductLoading /> : <ShowProducts />}
        </>
    )
}

export default Products