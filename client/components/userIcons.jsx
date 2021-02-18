import React,{useState, useEffect, useReducer} from 'react';
import Navb from './navbar';
import {
    Container,
    Row,
    Col
  } from 'reactstrap';

const UserIcons = (props) => {


    return (
        <div id='gameBack' style={{height: '100vh'}}>
             <div style={{zIndex: '999', width: '100vw'}}>
                <Navb props={props}/>
            </div>
        </div>
    )
}

export default UserIcons