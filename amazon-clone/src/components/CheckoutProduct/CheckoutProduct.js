import React from 'react'
import { useStateValue } from "../Providers/StateProvider"
import "./CheckoutProduct.css"

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {

    const [{ }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item to basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt=""></img>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
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

                {
                    !hideButton &&
                    (<button onClick={removeFromBasket}>Remove from Basket</button>)}
            </div>
        </div>
    )
}

export default CheckoutProduct
