import "./style.css";
import PointSquare from "../PointSquare";

function PlayerPoints() {
    return /*html*/`
        <figure class="player-points">
            ${PointSquare().repeat(3)}
        </figure>
    `;
};

export default PlayerPoints;