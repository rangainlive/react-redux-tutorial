import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ProductComponent() {
    const products = useSelector((state) => state.allProducts.products)

    return (
        
        <div className="three column wide">
        <div className="ui link cards">
        {products.map((product) => {
            return(
            <div className="card">
                <Link to={`/product/${product.id}`}>
                <div className="image">
                    <img src={product.image} alt={product.title} width="100%"/>
                </div>
                <div className="content">
                    <a className="header">{product.title}</a>
                    <div>
                        <span className="meta price" style={{color:"blue"}}>$ {product.price}</span>
                        <div className="meta">{product.category}</div>
                    </div>
                </div>
                <div>
                    <button> Add Cart</button>
                    <button> Add Favourites</button>
                </div>
                </Link>
            </div>  
            )
        })}
        </div>
                </div>
    )
}

export default ProductComponent
