import React,{useState, useEffect, useReducer} from 'react';
import Navb from './navbar';
import {
    Container,
    Row,
    Col
  } from 'reactstrap';
import { setActiveLink } from 'react-scroll/modules/mixins/scroller';

const UserIcons = (props) => {
    const [uIcon, setUIcon] = useState(0)

    const changeIcon = () => {
        const user_id = props.user.user_id;
        const icon = uIcon;
        
        if(icon === 0) {
            // user must select new icon option to submit
            return null
        }

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
                    if (props.user.user_id === 3) {
                        props.loginAsGuest()
                    } else {
                        props.login({name: props.user.name, password: props.user.password})
                    }
                }
            })
    }

    const selectIcon = (event) => {
        setUIcon(event.target.id)
        const icons = document.querySelectorAll('.iconHolder');
        for(let i = 0; i < icons.length; i++) {
            if (icons[i].id === event.target.id) {
                icons[i].style.border = '5px solid white'
            } else {
                icons[i].style.border = '5px solid transparent'
            }
        }
    }

    return (
        <div className='userIconback'>
             <div style={{zIndex: '999', width: '100vw'}}>
                <Navb props={props}/>
            </div>
            <div className ='d-flex flex-column align-items-center justify-content-center' id='ce'>
                <h1 className='iconTitle'>Change User Icon</h1>
                <h4 className='iconSubTitle'>Icon Selection: </h4>
            </div>
            <Container id='iconContainer' style={{width: '100vw'}} className='d-flex justify-content-center align-content-center align-items-center'>
                <Row>
                    <Col xs="12">
                        <Row className="d-flex m-auto fade-in row-cols-3 row-cols-md-2 row-cols-lg-3 justify-content-center pt-5 pb-5">
                            <Col>
                                <div onClick={() => selectIcon(event)} className='iconHolder' id ='/images/userIcons/dolphinIcon.png'>
                                    <img src="/images/userIcons/dolphinIcon.png" alt="dolphin" id ='/images/userIcons/dolphinIcon.png'/>
                                </div>
                            </Col>
                            <Col>
                                <div onClick={() => selectIcon(event)} className='iconHolder' id ='/images/userIcons/jellyfishIcon.png'>
                                    <img src="/images/userIcons/jellyfishIcon.png" alt="jellyfish"  id ='/images/userIcons/jellyfishIcon.png' />
                                </div>
                            </Col>
                            <Col>
                                <div onClick={() => selectIcon(event)} className='iconHolder' id ='/images/userIcons/fishIcon.png'>
                                    <img src="/images/userIcons/fishIcon.png" alt="fish" id ='/images/userIcons/fishIcon.png'/>
                                </div>
                            </Col>
                            <Col>
                                <div onClick={() => selectIcon(event)} className='iconHolder turtle' id ='/images/userIcons/turtleIcon.png'>
                                    <img src="/images/userIcons/turtleIcon.png" alt="turtle" id ='/images/userIcons/turtleIcon.png'/>
                                </div>
                            </Col>
                            <Col>
                                <div onClick={() => selectIcon(event)} className='iconHolder' id ='/images/userIcons/whaleIcon.png'>
                                    <img src="/images/userIcons/whaleIcon.png" alt="whale" id ='/images/userIcons/whaleIcon.png'/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div className='btnC'>
                <button className='setIconButton' onClick = {() => changeIcon()} >Set Icon</button>
            </div>
        </div>
    )
}

export default UserIcons