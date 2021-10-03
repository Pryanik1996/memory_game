import { useDispatch } from "react-redux"
import { startGame } from "../../redux/actions/game.action"
import Modal from "../Modal/Modal";


export default function Button({active, counter}) {
const dispatch = useDispatch();

    function playGame() {
        dispatch(startGame(true));
    }
    return (
        <div className="case">
        {active ? (<Modal counter={counter}/>) : (<h2>Нажмите на кнопку, чтобы начать игру</h2>)}
        <button type="button" className="btn btn-danger" onClick={playGame}>Начать игру</button>
        </div>
    )
}