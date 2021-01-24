import React from 'react';
import Rating from './rating';
import { Link } from 'react-router-dom';
function Product(props){

    const {product} = props;

    return(
        <div className="card" key={product._id}>
        <Link to={`/product/${product._id}`}>
            <img className="medium" src={product.image} alt={product.name} />
        </Link>

        <div className="card-body">
        <Link to={`/product/${product._id}`}>
         <h2>{product.name}</h2>
      </Link>

           <Rating rating={product.rating} numReview={product.numReview}></Rating> 

            <div className="price">${product.price}</div>
        </div>
    </div>
    );
}

export default Product;