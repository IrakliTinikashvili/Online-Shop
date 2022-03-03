import React from 'react';
import './ProductDetails.css';
import Image5 from '../assets/Image1-5.jpg'
import { getProduct } from '../api/category';


class ProductDetails extends React.Component {
    async componentDidMount() {
        let product = await getProduct("ps-5");
        console.log(product)
    }



    render() {
        return (
            <div className="product-content">
                <div className="gallery">
                    <img src={Image5} width={80} height={80} alt="img" />
                    <img src={Image5} width={80} height={80} alt="img" style={{ marginTop: "40px" }} />
                    <img src={Image5} width={80} height={80} alt="img" style={{ marginTop: "40px" }} />
                </div>
                <div style={{ marginRight: "80px" }}>
                    <img src={Image5} width={600} height={550} alt="img" />
                </div>
                <div style={{ width: "300px" }}>
                    <div>
                        <div className="item-title">Apollo</div>
                        <div className="item-type-title">Running Short</div>
                        <div className="item-size-title">SIZE:</div>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <button style={{ cursor: "not-allowed" }} className="size-button" type="button" disabled>XS</button>
                        <button className="size-button" style={{ margin: "0px 0px 0px 10px" }}>S</button>
                        <button className="size-button" style={{ margin: "0px 0px 0px 10px" }}>M</button>
                        <button className="size-button" style={{ margin: "0px 0px 0px 10px" }}>L</button>
                    </div>
                    <div>
                        <div className="item-price-title">PRICE:</div>
                        <div className="item-price">$50.00</div>
                    </div>
                    <div style={{ marginTop: "30px" }}>
                        <button className="cart-button">ADD TO CART</button>
                    </div>
                    <div className="text">
                        Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetails;