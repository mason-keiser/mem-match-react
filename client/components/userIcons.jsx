import React,{useState, useEffect, useReducer} from 'react';
import Navb from './navbar';
import {
    Container,
    Row,
    Col
  } from 'reactstrap';

const UserIcons = (props) => {
    const [uIcon, setUIcon] = useState(props.user.icon)

    const changeIcon = (icon) => {
        const user_id = props.user.user_id;
        fetch ('/api/changeIcon', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({icon: icon, user_id: user_id})
        })
        .then(response => {
            if (response.status === 400 || response.status === 404) {
                return null
            } else {
                return response.json();
            }
        })
            .then(result => {
                if (!result) {
                    return null
                } else {
                    setUIcon(result[0].icon)
                }
            })
    }

    return (
        <div id='gameBack' style={{height: '100vh'}}>
             <div style={{zIndex: '999', width: '100vw'}}>
                <Navb props={props}/>
            </div>
        </div>
    )
}

export default UserIcons