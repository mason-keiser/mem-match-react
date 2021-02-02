import React,{useState, useEffect} from 'react';
import Navb from './navbar';

const Login = (props) => {

    return (
        <div className='con'>
            <img src="/images/uw.jpg" alt="homeScreen" id='homeL'/>
            <Navb props = {props}/>
            <div className='loginCont'>
                <h1>Login</h1>
                <div>
                    <form className='loginForm'>
                        <div className='form-group'>
                            <label htmlFor="name">Name: </label>
                            <input type="text" autoComplete='name' placeholder='Name' name='name' className="" id='name'/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Password: </label>
                            <input type="password" placeholder='Password' autoComplete='password' name='password' className="" id='password'/>
                        </div>
                        <div id="required" className="required"></div>
                        <div className='loginbutton'>
                            <button type='submit' className='btn mt-2 white' style={{color: 'white'}}>Login</button>
                        </div>
                        <h4 className='needacc'>Click here to sign up</h4>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login;