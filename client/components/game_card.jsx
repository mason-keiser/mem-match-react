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
        <div>
            <div id={props.card.id} title={props.card.name} className='gameCard frontCard'>
              <Card onClick={(e) => props.handleClick(e)} id={props.card.id} title={props.card.name} data-tilt className='gameCard js-tilt skills-card border-0 slide-in-10 p-0 c' style={{background: 'rgba(0,0,0, 0.86)',  borderRadius: '25px'}}>
                <CardBody className='m-auto p-0' style={{flex: 'none'}} title={props.card.name} id={props.card.id}>
                <div className="icon3 decoration-none border-div-small d-flex" title={props.card.name} id={props.card.id}>
                    <h2 src={props.card.image} title={props.card.name}
                        className="iconName border-rounded proj-img"
                        id={props.card.id}> UTS</h2>
                </div>
                </CardBody>
              </Card>
              
            </div>
            <div id={props.card.id} title={props.card.name} className=' gameCard backCard flex-column justify-content-center'>
              <Card onClick={(e) => props.handleClick(e)} id={props.card.id} title={props.card.name} data-tilt className='gameCard js-tilt skills-card border-0 slide-in-10 p-0 c' style={{background: 'rgba(255,255,255, 0.5)', borderRadius: '25px'}}>
                <CardBody className='m-auto p-0' style={{flex: 'none'}} title={props.card.name} id={props.card.id}>
                <div className="icon2 decoration-none border-div-small d-flex" title={props.card.name} id={props.card.id}>
                    <img src={props.card.image} title={props.card.name}
                        className="cardImg border-rounded proj-img"
                        id={props.card.id} />
                </div>
                </CardBody>
              </Card>
            </div>
        </div>
    </Col>
    )
}

export default Game_Card