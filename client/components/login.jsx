import React,{useState, useEffect, useReducer} from 'react';
import Navb from './navbar';

const Login = (props) => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (callback) => {
        const use = document.getElementById('use');
        const lock = document.getElementById('lo')
        const req = document.getElementById('required')
        if (!name) {
            use.style.color = 'red'
            req.style.color = 'red'
            req.textContent ='* red fields are required for login *'
        } if (!password) {
            lock.style.color='red'
            req.style.color = 'red'
            req.textContent ='* red fields are required for login *'
        } 
        if (!name || !password) {
            event.preventDefault()
            return null
        }
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
            <Navb user={props.user} props={props} loginAsGuest={props.loginAsGuest}/>
            <div className='loginCont'>
                <div>
                    <form onSubmit={() => handleSubmit(props.login)} className='loginForm'>
                    <h1>Login</h1>
                        <div className='form-group'>
                            <label id='use' htmlFor="name">Name: </label>
                            <input type="text" autoComplete='name' placeholder='Name' name='name' className="" id='name' onChange={handleChange}/>
                        </div>
                        <div className='form-group'>
                            <label id='lo' htmlFor="password">Password: </label>
                            <input type="password" placeholder='Password' autoComplete='password' name='password' className="" id='password' onChange={handleChange}/>
                        </div>
                        <div id="required" className="required"></div>
                        <div className='loginbutton'>
                            <button type='submit' className='btn mt-2 white' style={{color: 'white', fontSize: '2rem'}}>Login</button>
                        </div>
                        <h4 onClick={() => props.setView({name: 'signup', params: {}})} className='needacc m-3'>Click here to sign up</h4>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login;