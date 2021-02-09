import React,{useState, useEffect, useReducer} from 'react';
import Navb from './navbar';
import {
    Container,
    Row,
    Col
  } from 'reactstrap';
import Game_Card from './game_card';

const Game = (props) => {
    const [cards, setCards] = useState({
        deck: [
            {
                id: 1,
                name: 'clamCard',
                image: '/images/cardIcons/clam.png'
            },
            {
                id: 1,
                name: 'clamCard',
                image: '/images/cardIcons/clam.png'
            },
            {
                id: 2,
                name: 'crabCard',
                image: '/images/cardIcons/crab.png'
            },
            {
                id: 2,
                name: 'crabCard',
                image: '/images/cardIcons/crab.png'
            },
            {
                id: 3,
                name: 'dolphinCard',
                image: '/images/cardIcons/dolphin.png'
            },
            {
                id: 3,
                name: 'dolphinCard',
                image: '/images/cardIcons/dolphin.png'
            },
            {
                id: 4,
                name: 'jellyfishCard',
                image: '/images/cardIcons/jellyfish.png'
            },
            {
                id: 4,
                name: 'jellyfishCard',
                image: '/images/cardIcons/jellyfish.png'
            },
            {
                id: 5,
                name: 'seahorseCard',
                image: '/images/cardIcons/seahorse.png'
            },
            {
                id: 5,
                name: 'seahorseCard',
                image: '/images/cardIcons/seahorse.png'
            },
            {
                id: 6,
                name: 'sealCard',
                image: '/images/cardIcons/seal.png'
            },
            {
                id: 6,
                name: 'sealCard',
                image: '/images/cardIcons/seal.png'
            },
            {
                id: 7,
                name: 'sharkCard',
                image: '/images/cardIcons/shark.png'
            },
            {
                id: 7,
                name: 'sharkCard',
                image: '/images/cardIcons/shark.png'
            },
            {
                id: 8,
                name: 'starfishCard',
                image: '/images/cardIcons/starfish.png'
            },
            {
                id: 8,
                name: 'starfishCard',
                image: '/images/cardIcons/starfish.png'
            },
            {
                id: 9,
                name: 'turtleCard',
                image: '/images/cardIcons/turtle.png'
            },
            {
                id: 9,
                name: 'turtleCard',
                image: '/images/cardIcons/turtle.png'
            },
            {
                id: 10,
                name: 'whaleCard',
                image: '/images/cardIcons/whale.png'
            },
            {
                id: 10,
                name: 'whaleCard',
                image: '/images/cardIcons/whale.png'
            }
        ]
    })

    const handleClick = () => {
        setTimeout(() => {
            const back = document.getElementById('back');
            const front = document.getElementById('front');
                console.log(back, front)
        },1000)
    }

    return (
        <div id='gameBack'>
            <div style={{zIndex: '999', width: '100vw'}}>
                <Navb props={props}/>
            </div>
            <img src="/images/uw.jpg" alt="homeScreen" id='homeL' style={{position: 'absolute', zIndex: '-1', top: 0}}/>
            <Container id='gameInfo' className='d-flex justify-content-center align-content-center align-items-center'>
                <Row>
                    <Col xs="12">
                        <Row className=" fade-in row-cols-1 row-cols-md-3 row-cols-lg-3 justify-content-center pt-5">
                            <Col className="mb-2" id='fold'>
                                <div id='infoI'>
                                    <h2>Total Matches: </h2>
                                    <h3>3</h3>
                                </div>
                            </Col>
                            <Col className="mb-2" id='fold'>
                                <div id='infoI'>
                                    <h2>Accuracy: </h2>
                                    <h3>58.97%</h3>
                                </div>
                            </Col>
                            <Col className="mb-2" id='fold'>
                                <div id='infoI'>
                                    <h2>Games Played: </h2>
                                    <h3>69</h3>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container id='gameCards' className='d-flex justify-content-center align-content-center align-items-center'>
                <Row>
                    <Col xs="12">
                        <Row className=" fade-in row-cols-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-2 justify-content-center pt-5">
                        {
                            cards.deck.map((card, index) => {
                                return (
                                    <Col key={index}
                                        className="m-1 " id='fold2'>
                                        {card.name
                                            ? <Game_Card card={card}/>
                                            : null}
                                    </Col>
                                );
                            })
                        }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Game