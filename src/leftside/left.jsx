import React from 'react';
import Helmet from '../Helmet/helmet';
import dashboardIconbold from '../Assets/setting 1.png';
import dashboardIcon from '../Assets/key-square.png';
import productIcon from '../Assets/3d-square 1.png';
import customersIcon from '../Assets/user-square 1.png';
import incomeIcon from '../Assets/wallet-money 2.png';
import promoteIcon from '../Assets/discount-shape 1.png';
import helpIcon from '../Assets/message-question 1.png';
import chright2 from '../Assets/chevron-right 2.png';
import chright from '../Assets/chevron-right1.png';
import thrdperson from '../Assets/Ellipse 8.png';

import '../leftside/left.css'
const left = () => {
    return <Helmet title={"Dashboard"}>
        <div className="left-menu">

            <div className="box1">
                <div className="icon1">
                    <img src={dashboardIconbold} alt="dashboard" /></div>
                <div className="left-menu-item">
                    <span>Dashboard<span className="text1">v.01</span></span></div>
            </div>


            <div className="box2">

                <div className="icon2"><img src={dashboardIcon} alt="settings" /></div>
                <div className="Dashboard">
                    <span>Dashboard</span>
                </div>
            </div>

            <div className="box3">

                <div className="icon3">
                    <img src={productIcon} alt="products" /></div>
                <div className="Product">
                    <span>Product<span className="chright1">
                        <img src={chright} alt="chevron-right" /></span></span>
                </div>
            </div>

            <div className="rectangle">
                <div className="box4">
                    <div className="icon4">
                        <img src={customersIcon} alt="customers" /></div>
                    <div className="Customers">
                        <span>Customers
                            <span className="chright2">
                                <img src={chright2} alt="chevron-right" /></span></span>
                    </div>
                </div>
            </div>

            <div className="box5">

                <div className="icon5">
                    <img src={incomeIcon} alt="income" /></div>
                <div className="Income">
                    <span>Income
                        <span className="chright3">
                            <img src={chright} alt="chevron-right" /></span></span>
                </div>
            </div>

            <div className="box6">

                <div className="icon6">
                    <img src={promoteIcon} alt="promotions" /></div>
                <div className="Promote">
                    <span>Promote
                        <span className="chright4">
                            <img src={chright} alt="chevron-right" /></span></span>
                </div>
            </div>

            <div className="box7">

                <div className="icon7">
                    <img src={helpIcon} alt="help" /></div>
                <div className="Help">
                    <span>Help
                        <span className="chright5">
                            <img src={chright} alt="chevron-right" /></span></span>
                </div>
            </div>

            <div className="group">
                <div className="left-menu-profile">
                    <div className="picture">
                        <img src={thrdperson} alt="profile" />
                    </div>
                    <div className="name"><span>Evano</span></div>
                    <div className="ocupation"><span>Project Manager</span></div>

                </div>
            </div>
        </div>
    </Helmet>
}

export default left;