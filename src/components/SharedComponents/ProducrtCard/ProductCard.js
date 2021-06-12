import { faCartPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import swal from 'sweetalert';
import { addToCart } from "../../../redux/actions/cartActions";
import "./ProductCard.scss";

const ProductCard = ({ data, setCart, cart }) => {

  const found = cart.find(item => item.key === data.key);

  const { name, price, img } = data;

  const handleAddToCart = data => {
    setCart(data)
    if (found){
      swal({
        title: "Already added",
        icon: "warning",
        button: {
          className:'alertBtn'
        },
      });
    }
  }

  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={img} alt='' />
      </div>
      <div className='product-info'>
        <div>
          <p id='product-name'>{name}</p>
          <p id='product-price'>{price} $</p>
        </div>
        <button onClick={() => handleAddToCart(data)} className='add-to-cart-btn'>
          <FontAwesomeIcon
            className='add-icon'
            id={found?'checked':''}
            icon={found?faCheck:faCartPlus}
          />
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCart: product => dispatch(addToCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
