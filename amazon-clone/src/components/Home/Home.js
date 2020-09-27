import React from 'react'
import "./Home.css"
import Product from "../Product/Product"

function Home() {
    return (
        <div className="home">
            <img alt="" className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjNkZWY0MjIt/YjNkZWY0MjIt-YjMwNGEwYzQt-w1500._CB404620529_.jpg"></img>

            <div className="home__row">
                <Product
                    id="12324"
                    title="AmazonFire Stick"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjNkZWY0MjIt/YjNkZWY0MjIt-ZWE2NWNjNDIt-w379._SY304_CB404253081_.jpg"
                >
                </Product>

                <Product
                    id="12325"
                    title="BAMEOS Upgraded Utensil Drawer Organizer,"
                    price={11.96}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41i2edS0yFL._AC_SL260_.jpg"
                >
                </Product>
            </div>

            <div className="home__row">
                <Product
                    id="12326"
                    title="Persian Rug"
                    price={11.96}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51J4yULr9jL._AC_SR250,230_.jpg"
                >
                </Product>

                <Product
                    id="12327"
                    title="The Lean Startup"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjNkZWY0MjIt/YjNkZWY0MjIt-ZWE2NWNjNDIt-w379._SY304_CB404253081_.jpg"
                >
                </Product>

                <Product
                    id="12328"
                    title="Café La Llave Espresso K-Cup (72 Count) Recyclable Single-Serve Coffee"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41xDnGn6dcL._AC_SY200_.jpg"
                >
                </Product>
            </div>

            <div className="home__row">
                <Product
                    id="12329"
                    title="Now trending: lived-in minimalism"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/ZTQ4ZDA1Y2It/ZTQ4ZDA1Y2It-N2JmMzcyNzAt-w379._SY304_CB404167896_.jpg"
                >
                </Product>
            </div>

        </div>
    )
}

export default Home
