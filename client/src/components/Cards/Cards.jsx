import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setCards, setStatus, removeCards } from '../../redux/actions/cards.action';
import { startGame } from '../../redux/actions/game.action';
import '../../styles/style.css'
import Button from '../Button/Button';

export default function Cards() {

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
const dublicateArr  = [...arr, ...arr];


const [counter, setCounter] = useState(0);
const [active, setActive] = useState(false);
const status = useSelector((state) => state.status);
const start = useSelector((state) => state.game);
const cards = useSelector((state) => state.cards);
const dispatch = useDispatch();

useEffect(() => {
    if(start) {
        setTimeout(() => setCounter(counter + 1), 1000);
    }
}, [start, counter])


    function handleClick(index) {
    if(!cards.includes(index)) {
        dispatch(setCards(index));
    }
}

useEffect(() => {
    if(cards.length === 2) {
        setTimeout(() =>  dispatch(removeCards([])), 1000);
    }
    const secondCard = dublicateArr[cards[1]];
    const firstCard = dublicateArr[cards[0]];
    if(firstCard === secondCard && typeof secondCard && typeof firstCard === 'number' && !status.includes(firstCard)) {
        dispatch(setStatus(firstCard));
    } 
    if(status.length === 18) {
        setTimeout(() =>  dispatch(startGame(false)), 1000);
        dispatch(setStatus([]));
        dispatch(removeCards([]));
        setActive(true);
    }
}, [cards])

    return (
        <>
        {start ?  
            (
            <div className="board">
                <span className="case">Текущее время: {counter}</span>
            <div className="cards">
                {dublicateArr.map((el, index, arr) => {
                    let flip = false
                    if(cards?.includes(index)) flip = true
                    if(status?.includes(el)) flip = true
                        return (
                        <div key={index} onClick={() => handleClick(index)} className={`star-card ${flip ? "flipped" : ""}`}>
                            <div className="inner">
                            <div className="front">
                            <img src={window.location.origin + `/img/${el}.jpeg`} alt="card" width="80" height="80"/>
                            </div>
                            <div>
                    <div className="wrap"></div>
                        </div>
                    </div>
                </div>
                )})}
            </div>
            </div>) : (<Button active={active} counter={counter}/> )}
        </>
)
}