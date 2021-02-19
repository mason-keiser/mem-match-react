import React,{useState, useEffect, useReducer} from 'react';
import Navb from './navbar';
import {
    Container,
    Row,
    Col
  } from 'reactstrap';

const SignUp = (props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [icon, setIcon] = useState('');
    const [wins, setWins] = useState('0')


    const handleSubmit = (callback) => {
        event.preventDefault()
        const obj = {
            name: name,
            password: password,
            icon: icon,
            wins: wins
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
        if (event.target.id === 'icon') {
            setIcon(event.target.value)
        }
    } 

    const handleIcon = (event) => {
        setIcon(event.target.id)
    }

    return (
        <div className='con2'>
            <img src="/images/uw.jpg" alt="homeScreen" id='homeL2'/>
            <Navb user={props.user} props={props} loginAsGuest={props.loginAsGuest}/>
            <div className='signupCont'>
            <div>
                <form onSubmit={() => handleSubmit(props.signUp)} className='loginForm2'>
                    <h1>Sign Up!</h1>
                        <div className='form-group'>
                            <label htmlFor="name">Name: </label>
                            <input type="text" autoComplete='name' placeholder='Name' name='name' className="" id='name' onChange={handleChange}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Password: </label>
                            <input type="password" placeholder='Password' autoComplete='password' name='password' className="" id='password' onChange={handleChange}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Player Icon: </label>
                            <Container id='iconContainer' style={{width: '100%', padding: 0}} className='d-flex justify-content-center align-content-center align-items-center'>
                                <Row>
                                    <Col xs="12">
                                        <Row className="d-flex m-auto fade-in row-cols-3 row-cols-md-2 row-cols-lg-3 justify-content-center pt-3 pb-3">
                                            <Col style={{paddingLeft: '5px', paddingRight: '5px'}}>
                                                <div onClick={() => handleIcon(event)} className='iconHolder2' id ='/images/userIcons/dolphinIcon.png'>
                                                    <img src="/images/userIcons/dolphinIcon.png" alt="dolphin" id ='/images/userIcons/dolphinIcon.png'/>
                                                </div>
                                            </Col>
                                            <Col style={{paddingLeft: '5px', paddingRight: '5px'}}>
                                                <div onClick={() => handleIcon(event)} className='iconHolder2' id ='/images/userIcons/jellyfishIcon.png'>
                                                    <img src="/images/userIcons/jellyfishIcon.png" alt="jellyfish"  id ='/images/userIcons/jellyfishIcon.png' />
                                                </div>
                                            </Col>
                                            <Col style={{paddingLeft: '5px', paddingRight: '5px'}}>
                                                <div onClick={() => handleIcon(event)} className='iconHolder2' id ='/images/userIcons/fishIcon.png'>
                                                    <img src="/images/userIcons/fishIcon.png" alt="fish" id ='/images/userIcons/fishIcon.png'/>
                                                </div>
                                            </Col>
                                            <Col style={{paddingLeft: '5px', paddingRight: '5px'}}>
                                                <div onClick={() => handleIcon(event)} className='iconHolder2 ' id ='/images/userIcons/turtleIcon.png'>
                                                    <img src="/images/userIcons/turtleIcon.png" alt="turtle" id ='/images/userIcons/turtleIcon.png'/>
                                                </div>
                                            </Col>
                                            <Col style={{paddingLeft: '5px', paddingRight: '5px'}}>
                                                <div onClick={() => handleIcon(event)} className='iconHolder2' id ='/images/userIcons/whaleIcon.png'>
                                                    <img src="/images/userIcons/whaleIcon.png" alt="whale" id ='/images/userIcons/whaleIcon.png'/>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                        <div id="required" className="required"></div>
                        <div className='loginbutton2'>
                            <button type='submit' className=' btn mt-2 white' style={{color: 'white', fontSize: '2rem'}}>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp