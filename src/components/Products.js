import React from 'react'
import tshirt from '../images/tshirt-mockup.jpg'
import polo_shirt from '../images/polo-shirt.jpg'
import chucks from '../images/chucks-shoes.jpg'
import '../styles/products.css'
import { ProductContext } from '../App'
import { useContext, useState, useEffect } from 'react';
import axios from 'axios'
import { toRand } from './Featured'
import {NavLink} from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'




const Products = (props) => {
    // const data = useContext(ProductContext)
    // 
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
    },[])

    

    const filterProduct = (cat) => {
        const updateList = data.filter((x) => x.category === cat)
        setFilter(updateList)
    }


    const Loading = () => {
        return (
            <>
                <div className='item-header-skeleton'>
                    <Skeleton height={40} width={120}/>
                    <div className='filter-dropdown-skeleton'>
                        <Skeleton height={40} width={120}/>
                        <Skeleton height={40} width={120}/>
                        <Skeleton height={40} width={120}/>
                        <Skeleton height={40} width={120}/>
                        <Skeleton height={40} width={120}/>
                    </div>
                </div>
                <div className="item-container-skeleton">
                    
                        <Skeleton height={300} width={300}/>
                        <Skeleton height={300} width={300}/>
                        <Skeleton height={300} width={300}/>
                        <Skeleton height={300} width={300}/>
                        <Skeleton height={300} width={300}/>
                        <Skeleton height={300} width={300}/>
                    
                </div>
                
            
           
</>
        )
    }




    const ShowProducts=()=>{
        return(
            <>
            <div className="items-header">
                <h2>Shop All</h2>
                <div className="filter-dropdown">
                    <button onClick={() => setFilter(data) }>All</button>
                    <button onClick={() => filterProduct("men's clothing") }>MEN</button>
                    <button onClick={() => filterProduct("women's clothing") }>WOMEN</button>
                    <button onClick={() => filterProduct("electronics") }>ELECTRONICS</button>
                    <button onClick={() => filterProduct("jewelery") }>JEWELERY</button>
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
       {loading ? <Loading /> : <ShowProducts/>}
       </>
    )
}

export default Products