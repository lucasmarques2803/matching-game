import "./style.css";
import PlayerName from "../../components/PlayerName";
import PlayerPoints from "../../components/PlayerPoints";
import PlayerVs from "../../components/PlayerVs";

function ScoreBoard() {
    return /*html*/`
        <header class="score-board">
            ${PlayerName("Player1")}
            ${PlayerPoints()}
            ${PlayerVs()}
            ${PlayerPoints()}
            ${PlayerName("Player2")}
        </header>
    `;
};

export default ScoreBoard;