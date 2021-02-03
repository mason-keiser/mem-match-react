import React,{useState, useEffect, useReducer} from 'react';
import Navb from './navbar';

const Game = (props) => {
    return (
        <div>
            <div style={{position: 'absolute', zIndex: '999', width: '100vw'}}>
                <Navb props={props}/>
            </div>
            <img src="/images/uw.jpg" alt="homeScreen" id='homeL'/>
        </div>
    )
}

export default Game