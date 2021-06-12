import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { addCount, removeCount, removeFromCart } from '../../../redux/actions/cartActions';

const CartTableRow = ({item, increaseQuantity, decreaseQuantity, removeCart}) => {

    const {key, name, price, quantity} = item;

    return (
        <tr>
            <td>{name}</td>
            <td>${price}</td>
            <td id="quantity">
                <button onClick={() => decreaseQuantity(key)}>
                <FontAwesomeIcon icon={faMinus} />
                </button>
                <div>{quantity}</div>
                <button onClick={() => increaseQuantity(key)}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </td>
            <td>${price * quantity}</td>
            <td>
                <button id='delete'>
                    <FontAwesomeIcon onClick={()=> removeCart(key)} icon={faTrashAlt} />
                </button>
            </td>
        </tr>
    );
};

const mapDispatchToProps = dispatch => {
    return {
      increaseQuantity: key => dispatch(addCount(key)),
      decreaseQuantity: key => dispatch(removeCount(key)),
      removeCart: key => dispatch(removeFromCart(key))
    }
}

const mapStateToProps = state => {
    return {
      cart: state.cartReducer.cart
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CartTableRow);