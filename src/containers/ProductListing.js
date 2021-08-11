import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';
import axios from 'axios'
import { setProducts } from '../redux/actions/productActions'

function ProductListing() {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log(products)
    const fetchProducts = async () => {
        const response = await axios.get('http://fakestoreapi.com/products')
        .catch((err) => {
            console.log("Err", err)
        });
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
        fetchProducts()
    },[])

    return (
        <div style={{marginTop:'2%'}} className="ui grid container">
            <ProductComponent/>
        </div>
    )
}

export default ProductListing