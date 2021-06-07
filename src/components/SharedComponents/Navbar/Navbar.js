import {
  faBars,
  faShoppingCart,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  NavLink
} from "react-router-dom";
import "./Navbar.scss";


const Navbar = ({ loggedInUser, cart }) => {
  const [navbar, setNavbar] = useState(false);

  const { email } = loggedInUser;

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
    // <nav className={navbar ? "active" : "disable"}>
    //   <div className='navbar-desktop'>
    //     <ul>
    //       <li id='logo'>
    //         Shop <span>Nyla</span>
    //       </li>
    //       <li>
    //         <Link to='/'>Home</Link>
    //       </li>
    //       <li>
    //         <Link to='/shop'>Shop</Link>
    //       </li>
    //       <li>
    //         <Link to='/about'>About</Link>
    //       </li>
    //       <li>
    //         <Link to='/contact'>Contact Us</Link>
    //       </li>
    //       <li>
    //         {email ? (
    //           photo ? (
    //             <img
    //               src={photo}
    //               onClick={() => history.push("/login")}
    //               className='user-logo'
    //               alt=''
    //             />
    //           ) : (
    //             <h4 onClick={() => history.push("/login")}>
    //               {name || email}
    //             </h4>
    //           )
    //         ) : (
    //           <Link to='/login'>Sign In</Link>
    //         )}
    //       </li>
    //     </ul>
    //   </div>
    //   <div className='navbar-phone'>
    //     <ul>
    //       <li id='logo'>
    //         Shop <span>Nyla</span>
    //       </li>
    //       <li> Button</li>
    //     </ul>
    //   </div>
    // </nav>
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
            <NavLink
              exact
              to='/login'
              activeClassName='active'
              className='nav-links'
              onClick={handleClick}
            >
              {email ? "log out" : "Log in"}
            </NavLink>
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
