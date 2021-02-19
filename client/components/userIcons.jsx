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
                                <div className='iconHolder'>
                                    <img src="/images/userIcons/dolphinIcon.png" alt="dolphin"/>
                                </div>
                            </Col>
                            <Col>
                                <div className='iconHolder'>
                                    <img src="/images/userIcons/jellyfishIcon.png" alt="jellyfish" />
                                </div>
                            </Col>
                            <Col>
                                <div className='iconHolder'>
                                    <img src="/images/userIcons/fishIcon.png" alt="fish"/>
                                </div>
                            </Col>
                            <Col>
                                <div className='iconHolder' id='turtle'>
                                    <img src="/images/userIcons/turtleIcon.png" alt="turtle"/>
                                </div>
                            </Col>
                            <Col>
                                <div className='iconHolder'>
                                    <img src="/images/userIcons/whaleIcon.png" alt="whale"/>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default UserIcons