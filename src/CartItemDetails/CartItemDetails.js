import React from 'react';
import './CartItemDetails.css'



class CartItemDetails extends React.Component {
    render() {
        return (
            <div className={this.props.componentSize !== "mini" ? "cart-content" : "cart-content-mini"}>
                <div>
                    <div className={this.props.componentSize !== "mini" ? "cart-item-title" : "cart-item-title-mini"}>{this.props.title}</div>
                    <div className={this.props.componentSize !== "mini" ? "cart-item-type" : "cart-item-type-mini"}>{this.props.type}</div>
                    <div className={this.props.componentSize !== "mini" ? "cart-item-price" : "cart-item-price-mini"}>{this.props.price}</div>
                    <div style={{ marginTop: "20px" }}>
                        <button className={this.props.componentSize !== "mini" ? "size-button" : "size-button-mini"}>{this.props.size1}</button>
                        <button className={this.props.componentSize !== "mini" ? "size-button" : "size-button-mini"} style={{ margin: "0px 0px 0px 10px" }}>{this.props.size2}</button>
                    </div>
                </div>
                <div style={{ marginTop: "45px", display: "flex" }}>
                    <div>
                        <button className={this.props.componentSize !== "mini" ? "plus-minus-button" : "plus-minus-button-mini"}>+</button>
                        <div className={this.props.componentSize !== "mini" ? "item-quantity" : "item-quantity-mini"}>{this.props.quantity}</div>
                        <button className={this.props.componentSize !== "mini" ? "plus-minus-button" : "plus-minus-button-mini"}>-</button>
                    </div>
                    <div>
                        <img style={{ margin: "0px 15px" }} src={this.props.imgSrc} width={100} height={149} alt="img" />
                    </div>
                </div>
            </div>
        )
    }
}



export default CartItemDetails;