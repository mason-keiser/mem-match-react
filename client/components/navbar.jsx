import React from 'react'
import { Navbar } from 'reactstrap';

const Navb = (props) => {

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

    return (
        <div>
            <Navbar className='nav'>
                <div onClick={() => handleMenu()} id='ham' className='ham fas fa-bars'>
                </div>
                <h1 className='brand'>Under The Sea</h1>
                <div className='d-flex flex-row justify-content-center align-items-center'>
                    <div onClick={() => props.props.setView({name: 'game', params: {}})} className = 'navButton'>Play Now</div>
                </div>
            </Navbar>
            <div id='side'  className='hamCont'>
                <h2 onClick={() => handleMenu()}className='x fa fa-times'></h2>
                <h3 onClick={() => props.props.setView({name: 'init', params: {}})}>◄ back home</h3>
                <h4>Mason Keiser © 2021</h4 >
            </div>
        </div>
    )
}

export default Navb