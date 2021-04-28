import React from 'react'
import {useParams} from "react-router-dom"
const ProductDetail = () => {
    const params = useParams()
    return (
        <section>
            <h1>product Detail Page</h1>
            <p>{params.productid}</p>
        </section>
    )
}

export default ProductDetail
