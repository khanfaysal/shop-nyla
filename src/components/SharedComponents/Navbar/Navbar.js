import {
  faBars,
  faShoppingCart,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Link,
  NavLink
} from "react-router-dom";
import "./Navbar.scss";


const Navbar = ({ loggedInUser, cart }) => {
  const [navbar, setNavbar] = useState(false);

  const { name, photo } = loggedInUser;

  const changeBackground = () => {
    if (window.scrollY >= 72) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () =>
      window.removeEventListener(
        "scroll",
        changeBackground
      );
  });

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className={navbar ? "white" : "transparent"}>
      <div className='nav-container'>
        <NavLink exact to='/' className='nav-logo'>
          Shop Nyla
        </NavLink>

        <ul
          className={click ? "nav-menu active" : "nav-menu"}
        >
          <li className='nav-item'>
            <NavLink
              exact
              to='/'
              activeClassName='active'
              className='nav-links'
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              to='/shop'
              activeClassName='active'
              className='nav-links'
              onClick={handleClick}
            >
              Shop
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              to='/about'
              activeClassName='active'
              className='nav-links'
              onClick={handleClick}
            >
              About
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              exact
              to='/contact'
              activeClassName='active'
              className='nav-links'
              onClick={handleClick}
            >
              Contact Us
            </NavLink>
          </li>
          <li className='nav-item cart-button'>
            <NavLink
              exact
              to='/cart'
              activeClassName='active'
              className='nav-links'
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>{cart.length}</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            {name ?
             <Link to='/login' onClick={handleClick}>
              {photo?
              <img className='user-logo' src={photo} alt="user-logo" />
              : <h5 className='nav-links user-name'>{name}</h5>}
             </Link>
            :<NavLink
              exact
              to='/login'
              activeClassName='active'
              className='nav-links'
              onClick={handleClick}
            >
              Log in
            </NavLink>}
          </li>
        </ul>
        <div className='nav-icon' onClick={handleClick}>
          <FontAwesomeIcon
            icon={click ? faTimes : faBars}
          />
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedInUser: state.userReducer.user,
    cart: state.cartReducer.cart
  };
};

export default connect(mapStateToProps)(Navbar);
