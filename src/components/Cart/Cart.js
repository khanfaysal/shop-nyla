import React from "react";
import { connect } from "react-redux";
import Footer from "../SharedComponents/Footer/Footer";
import './Cart.scss';
import CartTableRow from "./CartTableRow/CartTableRow";

const Cart = ({cart}) => {

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const tax = Math.round((totalPrice+15) * .1);

  return (
    <section>
      <div className="cart-container">
        {cart.length?
          <h2>Added Products {cart.length} </h2>:
          <h2 id="error">No Product Added</h2>
        }
        {cart.length>0&&
        <div id="cart" className="cart">
          <div className="cart-detail">
            <table>
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>TOTAL</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.map(item => <CartTableRow key={item.key} item={item} />)
                }
              </tbody>
            </table>
          </div>
          <div className="cart-counter">
            <h3>CART TOTALS</h3>
            <p>Product Total Price: $<span>{totalPrice}</span></p>
            <p>Shipping Cost: $<span>15</span></p>
            <p>Tax/Vat: $<span>{tax}</span></p>
            <h3>Total Price: $<span>{totalPrice+15+tax}</span></h3>
            <button>Checkout</button>
          </div>
        </div>}
      </div>
      <Footer />
    </section>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart
  }
}

export default connect(mapStateToProps)(Cart);
