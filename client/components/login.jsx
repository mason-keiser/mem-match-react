import React,{useState, useEffect} from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
  } from 'reactstrap';
  import {
    Link,
    animateScroll as scroll
  } from 'react-scroll';

const Login = (props) => {
    return (
        <div>
            <img src="/images/uw.jpg" alt="homeScreen" id='home'/>
            <Navbar className='nav'>
                <div className='ham fas fa-bars'></div>
                <h1 style={{ color: 'white', fontSize:'4rem'}}>Under The Sea</h1>
                <div className='d-flex flex-row justify-content-center align-items-center'>
                    <div className = 'navButton'>Play Now</div>
                </div>
            </Navbar>
        </div>
    )
}

export default Login;