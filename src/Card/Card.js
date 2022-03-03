import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import GreenVector from '../assets/GreenVector.png';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAddToCart: false
        }
    }

    showCart = () => {
        this.setState({
            showAddToCart: true
        })
    }

    hideCart = () => {
        this.setState({
            showAddToCart: false
        })
    }

    render() {
        return (
            <div className="card" onMouseOver={this.showCart} onMouseOut={this.hideCart}>
                <Link to="product-details" style={{ textDecoration: "none" }}>
                    <div>
                        <img src={this.props.imgSrc} width={350} height={370} alt="img" />
                    </div>
                    {this.state.showAddToCart ?
                        <div style={{ display: "flex", justifyContent: "flex-end" }}><img style={{ margin: "-25px 10px 0px 0px" }} src={GreenVector} alt="GreenVector" /></div>
                        : <div style={{ height: "27px", width: "100%" }}></div>
                    }
                    <div className="item-type">{this.props.title}</div>
                    <div className="price">{this.props.currency + this.props.price}</div>
                </Link>
            </div>
        )
    }
}

export default Card;