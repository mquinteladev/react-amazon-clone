import React, { useState, useEffect } from 'react'
import './Orders.css'
import { db } from "../../firebase"
import Order from '../../components/Order/Order';
import { useStateValue } from "../Providers/StateProvider"


function Orders() {
    const [{ user }] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                })
        }
        else {
            setOrders([]);
        }
    }, [])

    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="orders__orders">
                {
                    orders?.map(order => (
                        <Order order={order} />
                    ))
                }
            </div>

        </div>
    )
}

export default Orders
