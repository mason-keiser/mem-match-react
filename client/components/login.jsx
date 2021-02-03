import React,{useState, useEffect, useReducer} from 'react';
import Navb from './navbar';

const Login = (props) => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (callback) => {
        event.preventDefault()
        const obj = {
            name: name,
            password: password
        }
        if (!obj) {
            null
        } else {
        callback(obj)
        }
    }

    const handleChange = (event) => {
        if (event.target.id === 'name') {
            setName(event.target.value)
        }
        if (event.target.id === 'password') {
            setPassword(event.target.value)
        }
    } 

    return (
        <div className='con'>
            <img src="/images/uw.jpg" alt="homeScreen" id='homeL'/>
            <Navb props = {props}/>
            <div className='loginCont'>
                <div>
                    <form onSubmit={() => handleSubmit(props.login)} className='loginForm'>
                    <h1>Login</h1>
                        <div className='form-group'>
                            <label htmlFor="name">Name: </label>
                            <input type="text" autoComplete='name' placeholder='Name' name='name' className="" id='name' onChange={handleChange}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Password: </label>
                            <input type="password" placeholder='Password' autoComplete='password' name='password' className="" id='password' onChange={handleChange}/>
                        </div>
                        <div id="required" className="required"></div>
                        <div className='loginbutton'>
                            <button type='submit' className='btn mt-2 white' style={{color: 'white', fontSize: '2rem'}}>Login</button>
                        </div>
                        <h4 className='needacc m-3'>Click here to sign up</h4>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login;