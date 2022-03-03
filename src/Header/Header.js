import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import GreenLogo from '../assets/GreenLogo.png';
import Vector from '../assets/Vector.jpg'
import { getCategoryNames } from '../api/category';


class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: []
        }
    }

    async componentDidMount() {
        const result = await getCategoryNames();
        this.setState({
            categories: result.categories
        })
    }

    showShoppingCart = () => {
        if (document.getElementById('show-shopping-cart').style.display === "none") {
            document.getElementById('show-shopping-cart').style.display = "block";
        }
        else if (document.getElementById('show-shopping-cart').style.display === "block") {
            document.getElementById('show-shopping-cart').style.display = "none";
        }
    }

    render() {
        return (
            <div className="header">
                <div className="nav">
                    <Link className="link-nav-items" to="/"><div className="nav-item">{this.state.categories[0]?.name}</div></Link>
                    <Link className="link-nav-items" to="/"><div className="nav-item">{this.state.categories[1]?.name}</div></Link>
                    <Link className="link-nav-items" to="/"><div className="nav-item">{this.state.categories[2]?.name}</div></Link>
                </div>
                <div>
                    <img style={{ cursor: "pointer" }} src={GreenLogo} alt="GreenImg" />
                </div>
                <div>
                    <div className="right-top">
                        <form>
                            <label style={{ fontSize: "20px", fontWeight: "bold" }}>$</label>
                            <select className="select-currency">
                                <option style={{ display: "none" }}></option>
                                <option value="USD">$ USD</option>
                                <option value="EUR">€ EUR</option>
                                <option value="JPY">¥ JPY</option>
                            </select>
                        </form>
                        <img onClick={this.showShoppingCart} style={{ padding: "0px 18px", cursor: "pointer" }} src={Vector} alt="Vector" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;