import React from 'react'

const Home = (props) => {
    return (
        <div className='home_bg'>
            <img src="/images/uw.jpg" alt="homeScreen" id='home'/>
            <div className="loginButton" > Login </div>
            <div className="title">
                <h1>Under The Sea</h1>
                <h3>Memory Match Game</h3>
                <div className='co'>
                    <div className = 'playButton'>Play Now</div>
                </div>
            </div>
        </div>
    )
}

export default Home