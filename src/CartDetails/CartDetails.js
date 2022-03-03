import React from 'react';
import './CartDetails.css';
import CartItemDetails from '../CartItemDetails/CartItemDetails';
import Image5cut from '../assets/Image1-5-cut.png';
import Image7 from '../assets/Image7.png';

class CartDetails extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <div style={{ margin: "140px 60px 60px 60px" }}>
                        <div className="cart-naming">CART</div>
                        <div className="cart-details-hr">
                            <hr></hr>
                        </div>
                        <CartItemDetails title="Apollo" type="Running Short" price="$50.00" size1="S" size2="M" quantity="1" imgSrc={Image5cut} />
                        <div className="cart-details-hr">
                            <hr></hr>
                        </div>
                        <CartItemDetails title="Jupiter" type="Wayfarer" price="$75.00" size1="S" size2="M" quantity="2" imgSrc={Image7} />
                    </div>
                </div>
            </div>
        )
    }
}


export default CartDetails;