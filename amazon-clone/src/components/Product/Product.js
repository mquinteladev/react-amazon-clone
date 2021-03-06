import React from 'react'
import "./Product.css"
import { useStateValue } from "../Providers/StateProvider"

function Product({ id, title, image, price, rating }) {
    const [{ }, dispatch] = useStateValue();

    const addToBasket = () => {
        // Add item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image
            }
        });
    };


    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating" >
                    {
                        Array(rating).fill()
                            .map((_, index) => (
                                <p key={index} className="product__star">★</p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt=""></img>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
