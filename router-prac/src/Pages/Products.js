import React from 'react'
import {Link, useParams} from "react-router-dom"
const Products = () => {

    // console.log(params)
    return (
        <div>
        <h1>Products page</h1>
        <ul>
       <Link to ="/products/p1">
        <li>product1</li>
        </Link>
        <Link to ="/products/p2">
        <li>product2</li>
        </Link>
        <Link to ="/products/p3">
        <li>product3</li>
        </Link>          
        </ul>  
        </div>
    )
}

export default Products
