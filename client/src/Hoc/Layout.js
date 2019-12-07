import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Layout = props => (
    <div className="base-layout">
        <div className="base-layout2">
            <Header />
            <div className={props.source !=='index'? 'md50': ''}>
                {props.children}
            </div>
        </div>
        <Footer />
    </div>
)

export default Layout;