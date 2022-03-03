import React from 'react';
import './MainContent.css';
import Card from '../Card/Card';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Image5cut from '../assets/Image1-5-cut.png';
import { getCategory } from '../api/category';





class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    async componentDidMount() {
        const result = await getCategory();
        this.setState({
            products: result.category.products,
            name: result.category.name
        })
    }

    render() {
        return (
            <div style={{ marginTop: "80px" }}>
                <ShoppingCart title="Apollo" type="Running Short" price="$50.00" size1="S" size2="M" quantity="1" imgSrc={Image5cut} />
                <div>
                    <div>
                        <div className="category">{this.state.name}</div>
                    </div>
                    <div className="item-row" style={{ marginTop: "60px" }} >
                        {
                            this.state.products.map((item) => {
                                return (<Card title={item.name} price={item.prices[0].amount} currency={item.prices[0].currency.symbol} imgSrc={item.gallery[0]} key={item.id} />)
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}




export default MainContent;