import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../leftside/left.css';
import searchicon from '../Assets/search 1.png';
import data from '../Data/data';

const Right = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [usersData, setUsersData] = useState(data);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        const searchedUsers = data.filter((item) =>
            item.customerName.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item.company.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item.country.toLowerCase().includes(e.target.value.toLowerCase()) ||
            item.Email.toLowerCase().includes(e.target.value.toLowerCase())
        
            
        );
setUsersData(searchedUsers);
    };

return (
    <div className="right-side-menu">
        <div className="textHello">
            Hello Evano 👋🏼, <span></span>
        </div>
        <div className="customersRec">
            <div className="all-customers">All Customers</div>
            <div className="Active-mem">Active Members</div>
            <div
                className="search"
                style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
            >
                <img className="searchicon" src={searchicon} alt="Search icon" />
                <input
                    type="text"
                    placeholder="Search....."
                    value={searchTerm}
                    onChange={handleSearch}
                    style={{ marginLeft: '5px', marginRight: '5px' }}
                />
                <span>
                    <i className="ri-search-line"></i>
                </span>
            </div>
            <Container>

                <Row>

                    <Col>
                        <div className="custNameLabel">Customer Name</div>

                        {usersData.map((user, index) => (
                            <div key={index} className={`custName user-${index}`}>{user.customerName}</div>

                        ))}
                    </Col>

                    <Col>
                        <div className="companyLabel">Company</div>
                        {usersData.map((user, index) => (
                            <div key={index} className={`company user-${index}`}>{user.company}</div>
                        ))}
                    </Col>

                    <Col>
                        <div className="phoneNumLabel">Phone Number</div>
                        {usersData.map((user, index) => (
                            <div key={index} className={`phoneNum user-${index}`}>{user.phoneNumber}</div>
                        ))}
                    </Col>

                    <Col>
                        <div className="emailNLabel">Email</div>
                        {usersData.map((user, index) => (
                            <div key={index} className={`emailN user-${index}`}>{user.Email}</div>
                        ))}
                    </Col>

                    <Col>
                        <div className="countryNLabel">Country</div>
                        {usersData.map((user, index) => (
                            <div key={index} className={`countryN user-${index}`}>{user.country}</div>
                        ))}
                    </Col>

                    <Col>
                        <div className="statusNLabel">Status</div>
                        {usersData.map((user, index) => (
                            <div key={index} className={`frame user-${index} `}>
                                <span className={`statusText user-${index}`}>{user.status}</span>
                            </div>
                        ))}
                    </Col>
                    <div className={`row-divider0`}></div>
                    <div className={`row-divider1`}></div>
                    <div className={`row-divider2`}></div>
                    <div className={`row-divider3`}></div>
                    <div className={`row-divider4`}></div>
                    <div className={`row-divider5`}></div>
                    <div className={`row-divider6`}></div>
                    <div className={`row-divider7`}></div>
                    <div className={`row-divider8`}></div>
                    <Col>
                        <div className="textdata">Showing data 1 to 8 of  256K entries</div>
                    </Col>
                    <Col>
                        <div className="btn1">

                            <div className="textbox1" datanumber="1">
                                &lt;
                            </div>

                        </div>
                        <div className="btn2">

                            <div className="textbox2" datanumber="1">
                                1
                            </div>

                        </div>
                        <div className="btn3">

                            <div className="textbox3" datanumber="1">
                                2
                            </div>

                        </div>
                        <div className="btn4">

                            <div className="textbox4" datanumber="1">
                                3
                            </div>

                        </div>
                        <div className="btn5">

                            <div className="textbox5" datanumber="1">
                                4
                            </div>

                        </div>
                        <div className="btn6">

                            <div className="textbox6" datanumber="1">
                                40
                            </div>

                        </div>
                        <div className="elem">...</div>
                        <div className="btn7">

                            <div className="textbox7" datanumber="1">
                                &gt;
                            </div>

                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    </div>
);
}

export default Right;
