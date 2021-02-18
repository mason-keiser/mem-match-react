import React, { useEffect } from 'react'
import { Navbar } from 'reactstrap';

const Navb = (props) => {

    useEffect(() => {
        setInterval(() => {
            navSwitch()
        },1)
    }, [])

    const handleMenu = () => {
        const ham = document.getElementById('side');
        const icon = document.getElementById('ham');
        if (ham.classList.contains('open')) {
            ham.classList.remove('open') 
            icon.style.color = 'white'
        } else {
            ham.classList.add('open')
            icon.style.color ='black'
        }
    }

    const navSwitch = () => {
        if (props.props.view.name === 'login') {
            return (
                <div onClick={() => props.loginAsGuest()} className = 'navButton'>Play Now</div>
            )
        } if (!(Object.keys(props.props.user).length === 0)) {
            return (
                <div className='d-flex justify-content-between flex-row align-items-center pr-2'>
                    <img src={props.props.user.icon} alt="" id='navIcon'/>
                    <h3 id='userName'>{props.props.user.name}</h3>
                </div>
            )
        }
    }

    const navTert = (props.props.view.name === 'userIcons' && props.props.user.user_id === 3) ? 
    (
        <div id='side'  className='hamCont'>
                <h2 onClick={() => handleMenu()}className='x fa fa-times'></h2>
                <h3 className='m-4' onClick={() => props.props.setView({name: 'login', params: {}})}>Login</h3>

                <h3 className='m-2' onClick={() => props.props.setView({name: 'game', params: {}})}>◄ back to game</h3>
                <h4>Mason Keiser © 2021</h4 >
        </div>
    ) 
    : (props.props.view.name === 'login')
        ? (
            <div id='side'  className='hamCont'>
                <h2 onClick={() => handleMenu()}className='x fa fa-times'></h2>
                <h3 className='m-4' onClick={() => props.props.setView({name: 'login', params: {}})}>Login</h3>
                <h3 className='m-2' onClick={() => props.props.setView({name: 'init', params: {}})}>◄ back home</h3>
                <h4>Mason Keiser © 2021</h4 >
            </div>
        )
        : (props.props.view.name === 'game' & props.props.user.user_id === 3)
            ? (
            <div id='side'  className='hamCont'>
                <h2 onClick={() => handleMenu()}className='x fa fa-times'></h2>
                <h3 className='m-4' onClick={() => props.props.setView({name: 'login', params: {}})}>Login</h3>
                <h3 className='mt-3 mb-5' onClick={() => props.props.setView({name: 'userIcons', params: {}})}>Change User Icon</h3>
                <h3 onClick={() => props.props.setView({name: 'init', params: {}})}>◄ back home</h3>
                <h4>Mason Keiser © 2021</h4 >
            </div>
            )
            : (props.props.view.name === 'userIcons' && props.props.user.user_id !== 3) 
                ? (
                    <div id='side'  className='hamCont'>
                        <h2 onClick={() => handleMenu()}className='x fa fa-times'></h2>
 
        
                        <h3 className='m-5' onClick={() => props.props.setView({name: 'game', params: {}})}>◄ back to game</h3>
                        <h4>Mason Keiser © 2021</h4 >
                    </div>
                ) 
                    : (props.props.view.name === 'game' && props.props.user.user_id !== 3) 
                        ? (
                            <div id='side'  className='hamCont'>
                                <h2 onClick={() => handleMenu()}className='x fa fa-times'></h2>
                                <h3 className='mt-3 mb-5' onClick={() => props.props.setView({name: 'userIcons', params: {}})}>Change User Icon</h3>
                                <h3 onClick={() => props.props.setView({name: 'init', params: {}})}>◄ back home</h3>
                                <h4>Mason Keiser © 2021</h4 >
                            </div>
                        )
                        : null 

    return (
        <div>
            <Navbar className='nav'>
                <div onClick={() => handleMenu()} id='ham' className='ham fas fa-bars'>
                </div>
                <h1 className='brand'>Under The Sea</h1>
                <div className='d-flex flex-row justify-content-center align-items-center'>
                    {navSwitch()}
                </div>
            </Navbar>
            {navTert}
        </div>
    )
}

export default Navb