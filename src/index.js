import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import MainContent from './MainContent/MainContent';
import ProductDetails from './ProductDetails/ProductDetails';
import CartDetails from './CartDetails/CartDetails';




class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route index element={<MainContent />} />
                        <Route path="product-details" element={<ProductDetails />} />
                        <Route path="cart-details" element={<CartDetails />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));


