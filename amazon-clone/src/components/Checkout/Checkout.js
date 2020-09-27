import React from 'react'
import { useStateValue } from "../Providers/StateProvider"
import "./Checkout.css"
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import CurrencyFormat from "react-currency-format"

function Checkout() {
    const [{ basket, user }] = useStateValue();
    return (
        <div className="checkout">

            <div className="checkout__left">
                <img alt="" className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/ad-creative-12/TCG/Discov_logoVC._CB485948417_.png"></img>
                {
                    basket?.length === 0 ? (
                        <div>
                            <h2>Your Shopping basket is empty</h2>
                            <p>
                                You have no items in your basket. To buy one more items,
                                clieck "Add to basket" next to the item.
                        </p>
                        </div>
                    ) : (
                            <div >
                                <h3>{user?.email}</h3>
                                <h2 className="checkout__title">Your Shopping basket </h2>

                                {
                                    basket?.map(item => (
                                        <CheckoutProduct
                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            price={item.price}
                                            rating={item.rating}
                                        />
                                    ))
                                }


                            </div>
                        )
                }


            </div>

            {basket.length >= 0 && (
                <div className="checkout__right">
                    <h1>Subtotal</h1>
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
