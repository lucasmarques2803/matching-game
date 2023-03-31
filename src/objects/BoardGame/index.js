import "./style.css";
import cards from "./data";
import CardFrontBack from "../../components/CardFrontBack";

function BoardGame(amountCards) {
    const resetCards = ($cardsActive) => {
        $cardsActive.forEach((card) => card.classList.remove("-active"));
    };

    const swapPlayer = () => {
        const $arrowDown = document.querySelector(".arrow-down");
        const currentPlayer = $arrowDown.getAttribute("data-currentplayer");

        $arrowDown.setAttribute("data-currentplayer", currentPlayer == 1 ? 2 : 1);
    };

    window.boardGame = {};
    window.boardGame.handleClick = () => {
        const $boardGame = document.querySelector(".board-game");
        const $cardsActive = $boardGame.querySelectorAll(".card-front-back.-active");

        if($cardsActive.length == 2) {
            setTimeout(() => {
                resetCards($cardsActive);
                swapPlayer();
            }, 600);
        };
    };
    const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = htmlCardsList.join("");

    return /*html*/`
        <section class="board-game" onClick="boardGame.handleClick(event)">
            ${$htmlCards}
        </section>
    `;
};

export default BoardGame;