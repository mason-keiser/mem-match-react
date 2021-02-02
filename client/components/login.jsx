import React,{useState, useEffect} from 'react';
import Navb from './navbar';

const Login = (props) => {

    return (
        <div style={{height: '100vh'}}>
            <img src="/images/uw.jpg" alt="homeScreen" id='home'/>
            <Navb props = {props}/>
        </div>
    )
}

export default Login;