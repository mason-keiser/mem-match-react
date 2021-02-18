import React,{useState, useEffect, useReducer} from 'react';
import Navb from './navbar';
import {
    Container,
    Row,
    Col
  } from 'reactstrap';
import Game_Card from './game_card';
import {
    Link,
    animateScroll as scroll
  } from 'react-scroll';

const Game = (props) => {
    let [firstCardClicked, setFirstCardClicked] = useState(0);
    let [secondCardClicked, setSecondCardClicked] = useState(0);
    let [matches, setMatches] = useState(0);
    let [attempts, setAttempts] = useState(0);
    let [wins, setWins] = useState(props.user.wins)

    const [cards, setCards] = useState({
        deck: [
            {
                id: 1,
                name: 'clamCard',
                image: '/images/cardIcons/clam.png'
            },
            {
                id: 2,
                name: 'clamCard',
                image: '/images/cardIcons/clam.png'
            },
            {
                id: 3,
                name: 'crabCard',
                image: '/images/cardIcons/crab.png'
            },
            {
                id: 4,
                name: 'crabCard',
                image: '/images/cardIcons/crab.png'
            },
            {
                id: 5,
                name: 'dolphinCard',
                image: '/images/cardIcons/dolphin.png'
            },
            {
                id: 6,
                name: 'dolphinCard',
                image: '/images/cardIcons/dolphin.png'
            },
            {
                id: 7,
                name: 'jellyfishCard',
                image: '/images/cardIcons/jellyfish.png'
            },
            {
                id: 8,
                name: 'jellyfishCard',
                image: '/images/cardIcons/jellyfish.png'
            },
            {
                id: 9,
                name: 'seahorseCard',
                image: '/images/cardIcons/seahorse.png'
            },
            {
                id: 10,
                name: 'seahorseCard',
                image: '/images/cardIcons/seahorse.png'
            },
            {
                id: 11,
                name: 'sealCard',
                image: '/images/cardIcons/seal.png'
            },
            {
                id: 12,
                name: 'sealCard',
                image: '/images/cardIcons/seal.png'
            },
            {
                id: 13,
                name: 'sharkCard',
                image: '/images/cardIcons/shark.png'
            },
            {
                id: 14,
                name: 'sharkCard',
                image: '/images/cardIcons/shark.png'
            },
            {
                id: 15,
                name: 'starfishCard',
                image: '/images/cardIcons/starfish.png'
            },
            {
                id: 16,
                name: 'starfishCard',
                image: '/images/cardIcons/starfish.png'
            },
            {
                id: 17,
                name: 'turtleCard',
                image: '/images/cardIcons/turtle.png'
            },
            {
                id: 18,
                name: 'turtleCard',
                image: '/images/cardIcons/turtle.png'
            },
            {
                id: 19,
                name: 'whaleCard',
                image: '/images/cardIcons/whale.png'
            },
            {
                id: 20,
                name: 'whaleCard',
                image: '/images/cardIcons/whale.png'
            }
        ]
    })

    useEffect(() => {
      //  shuffleRecArray()
    },[])

    const shuffleRecArray = () => {
        let shuffledArray = cards.deck.sort((a, b) => {
            return Math.random() - 0.5
        })
        setCards({
          deck: shuffledArray
        });
      }

    const handleClick = (event) => {
        const back = document.querySelectorAll('.backCard');
        const front = document.querySelectorAll('.frontCard');
        
        const flipCards = () => {
            back.forEach(b => {
                if (b.id === event.target.id) {
                    b.style.display = 'unset'
                }
            })
            front.forEach(f => {
                if (f.id === event.target.id) {
                    f.style.display = 'none'
                }
            })
        }

        const resetCards = (first, second) => {
            back.forEach(b => {
                if (b.id === first.id || b.id === second.id) {
                    b.style.display = 'none'
                }
            })
            front.forEach(f => {
                if (f.id === first.id || f.id === second.id) {
                    f.style.display = 'unset'
                    f.style.background = 'rgba(0,0,0, 0.86)'
                }
            })
        }

        if (!firstCardClicked) {
            firstCardClicked = event.target;
            setFirstCardClicked(event.target)
            flipCards();
        } else {
            secondCardClicked = event.target;
            setSecondCardClicked(event.target);
            setAttempts(attempts + 1);
            flipCards();
            if (firstCardClicked.title === secondCardClicked.title) {
                firstCardClicked = null;
                secondCardClicked = null;
                setFirstCardClicked(0);
                setSecondCardClicked(0);
                setMatches(matches + 1);
            } else {
                setTimeout(() => {
                    setFirstCardClicked(0);
                    setSecondCardClicked(0);
                    resetCards(firstCardClicked.parentElement, secondCardClicked.parentElement);
                    firstCardClicked = null;
                    secondCardClicked = null;                   
                  },750);
            }
        }
    }

    const resetGame = () => {
        const back = document.querySelectorAll('.backCard');
        const front = document.querySelectorAll('.frontCard');
        setTimeout(() => {
            back.forEach(b => {
                b.style.display = 'none'
            })
            front.forEach(f => {
                f.style.display = 'unset'
            })
        },1000);
        setMatches(0);
        setAttempts(0);
    }

    const winApiCall = () => {
        fetch('/api/win/', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ user_id: props.user.user_id})
        })
        .then(res => {
            return res.json()
        })
        .then(result => {
            console.log(result[0].wins)
            setTimeout(() => {
                document.getElementById('totalGames').textContent= result[0].wins
            },1000)
            
        })
    }

    if (matches === 10) {
        console.log('you win!');
        const modal = document.getElementById('modalCont')
            modal.style.display = 'flex'
    }  

    const modalButtonFx = () => {
        winApiCall()
        resetGame()
        const modal = document.getElementById('modalCont')
            modal.style.display = 'none'
    }

    let accInfo = (attempts === 0) ? '0%' : (Math.trunc(matches / attempts * 100) + '%')
    const userTert = (Object.keys(props.user).length === 0) ? 0 : props.user.wins

    const modal = () => {
        return (
            <div className='modalCont' id='modalCont'>
                <div className='d-flex flex-column align-items-center'>
                    <div className='modalTitle'>
                        <h1 style={{textAlign: 'center', color: 'white'}}>You Win!</h1>
                    </div>
                    <div>
                        <img src={props.user.icon} alt="" id='winPlayerLogo'/>
                        <h2 className='' style={{textAlign: 'center', color: 'white'}}>Good Job {props.user.name}!</h2>
                    </div>
                    <div>
                        <button onClick={() => modalButtonFx()} className='playAgainButton'>
                            Play Again?
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id='gameBack'>
            {modal()}
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
                                    <h3 id='matchesInfo'>{matches}</h3>
                                </div>
                            </Col>
                            <Col className="mb-2" id='fold'>
                                <div id='infoI'>
                                    <h2>Accuracy: </h2>
                                    <h3 id='accuracyInfo'>{accInfo}</h3>
                                </div>
                            </Col>
                            <Col className="mb-2" id='fold'>
                                <div id='infoI'>
                                    <h2>Games Played: </h2>
                                    <h3 id='totalGames'>{userTert}</h3>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container id='gameCards' className='d-flex justify-content-center align-content-center align-items-center pb-5'>
                <Row>
                    <Col xs="12">
                        <Row className=" fade-in row-cols-2 row-cols-md-4 row-cols-lg-4 row-cols-xl-2 justify-content-center pt-5">
                        {
                            cards.deck.map((card, index) => {
                                return (
                                    <Col key={index}
                                        className="m-1 fold2"  id={card.name}>
                                        {card.name
                                            ? <Game_Card handleClick={handleClick} card={card}/>
                                            : null
                                        }
                                    </Col>
                                );
                            })
                        }
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div>
            <div id='btn' className='toTopBtn' onClick={() => scroll.scrollToTop()}>▲</div>
            </div>
        </div>
    )
}

export default Game