import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  removeSelectedProduct,
  selectedProduct,
} from "./redux/actions/productActions";

function ProductDetail() {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(productId);

  const fetchProductDetail = async () => {
    const response = await axios
      .get("http://fakestoreapi.com/products/" + productId)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div>
      <div className="ui card">
        <div className="image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="content">
          <a href="/" className="header">
            {product.title}
          </a>
          <div className="meta">
            <span className="price">$ {product.price}</span>
          </div>
          <div className="description">{product.description}</div>
        </div>
        <div className="extra content">
          <button>Add Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
