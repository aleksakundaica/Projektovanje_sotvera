import React from 'react';
import '../css/Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';
import { auth } from '../firebase'

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuth = () => {
        if (user) {
            auth.signOut();
            console.log("User is sign out: ", user.email);
        }

    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuth} className="header__option">
                        <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                {user ? <div className="header__option">
                    <Link to="/orders">
                        <span className="header__optionLineOne">
                            Returns
                        </span>
                        <span className="header__optionLineTwo">
                            & Orders
                        </span>
                    </Link>
                </div> : null}

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                            </span>
                    <span className="header__optionLineTwo">
                        Prime
                            </span>
                </div>

                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>

    )
}

export default Header
