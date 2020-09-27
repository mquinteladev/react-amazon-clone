import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "../Providers/StateProvider"

function Header() {
    const [{ basket }] = useStateValue();

    console.log(basket);
    return (
        <nav className="header">

            {/*  logo */}
            <Link to="/login">
                <img alt="" className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" ></img>
            </Link>

            {/* search inout */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon"></SearchIcon>
            </div>

            {/* extra links */}
            <div className="header__nav">

                {/* first link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Oazi</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                {/* second link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/*  third link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your </span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/*  fourth link */}

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                        <span className="header__optionLineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
