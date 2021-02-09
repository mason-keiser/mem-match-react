import React from 'react';
import {
  Col,
  Card,
  CardBody
} from 'reactstrap';




const Game_Card = (props) => { 

    const handleClick = (event) => {
        const back = document.querySelectorAll('.backCard');
        const front = document.querySelectorAll('.frontCard');
        back.forEach(b => {
          if (b.id === event.target.id) {
            console.log(b)
          }
        })
    }


  return (
    <Col 
      className="mr-5 ml-5 mobile-card m-auto skillC p-0" id='skillC' style={{width: 'fit-content'}}>
      <Card onClick={(e) => handleClick(e)} data-tilt className='gameCard js-tilt skills-card border-0 slide-in-10 p-0' id={props.card.name}>
        <CardBody className='m-auto' style={{flex: 'none'}} id={props.card.name}>
        <div>
            <div id={props.card.name} className='frontCard'>
                
            </div>
            <div id={props.card.name} className='backCard flex-column justify-content-center'>
                <div className="icon2 decoration-none border-div-small d-flex" id={props.card.name}>
                    <img src={props.card.image}
                        className="cardImg border-rounded proj-img"
                        id={props.card.name} />
                </div>
            </div>
        </div>
        </CardBody>
      </Card>
    </Col>
    )
}

export default Game_Card