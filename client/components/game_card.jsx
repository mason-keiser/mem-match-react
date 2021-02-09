import React from 'react';
import {
  Col,
  Card,
  CardBody
} from 'reactstrap';




const Game_Card = (props) => { 

  return (
    <Col 
      className="mr-5 ml-5 mobile-card m-auto skillC p-0" id='skillC' style={{width: 'fit-content'}}>
      <Card data-tilt className=' js-tilt skills-card border-0 slide-in-10 p-0' id='gameCard'>
        <CardBody className='m-auto' style={{flex: 'none'}} id='inner'>
        <div className='d-flex flex-column justify-content-center'>
            <div className="decoration-none border-div-small d-flex" id='icon2'>
                <img src={props.card.image}
                className="img-fluid border-rounded proj-img"
                id='cardImg' />
            </div>
        </div>
        </CardBody>
      </Card>
    </Col>
    )
}

export default Game_Card