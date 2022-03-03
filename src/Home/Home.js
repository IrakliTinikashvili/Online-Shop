import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';




class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Outlet />
            </div>
        )
    }
}

export default Home;