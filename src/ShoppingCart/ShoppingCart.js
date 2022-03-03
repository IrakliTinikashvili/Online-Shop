import React from 'react';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';
import CartItemDetails from '../CartItemDetails/CartItemDetails';
import Image5cut from '../assets/Image1-5-cut.png';
import Image7 from '../assets/Image7.png';

class ShoppingCart extends React.Component {
    render() {
        return (
            <div className="modal" style={{ display: "none" }} id="show-shopping-cart">
                <div className="shopping-cart-modal" >
                    <div>
                        <span style={{ fontWeight: "bold", fontSize: "18px" }}>My Bag,</span>
                        <span style={{ fontSize: "16px" }}> 2 items</span>
                    </div>
                    <CartItemDetails componentSize="mini" title="Apollo" type="Running Short" price="$50.00" size1="S" size2="M" quantity="1" imgSrc={Image5cut} />
                    <CartItemDetails componentSize="mini" title="Jupiter" type="Wayfarer" price="$75.00" size1="S" size2="M" quantity="2" imgSrc={Image7} />
                    <div className="total-price">
                        <div>Total</div>
                        <div>$100.00</div>
                    </div>
                    <div className="bottom-buttons">
                        <Link to="/cart-details">
                            <button className="view-bag-button">VIEW BAG</button>
                        </Link>
                        <button className="check-out-button">CHECK OUT</button>
                    </div>
                </div>
            </div>
        )
    }
}




export default ShoppingCart;