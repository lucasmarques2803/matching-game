import "./style.css";
import CardGame from "../CardGame";

function CardFrontBack() {
    let clicks = 0;
    window.cardFrontBack = {};
    window.cardFrontBack.handleClick = (event) => {
        clicks += 1;
        const $origin = event.target;
        const $cardFrontBack = $origin.closest('.card-front-back');

        $cardFrontBack.classList.toggle('-active');

        if (clicks == 2) {
            setTimeout(() => {
                clicks = 0;
                const $playerArrow = document.querySelector('.player-arrow');
                const $cardsFrontBack = document.querySelectorAll('.card-front-back');
    
                $playerArrow.classList.toggle('-p2');
                $cardsFrontBack.forEach(($cardFrontBack) => {
                    $cardFrontBack.classList.remove('-active');
                });
            }, 500);
        };
    };

    return /*html*/`
        <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
            <div class="card -front">
                ${CardGame()}
            </div>

            <div class="card -back">
                ${CardGame("javascript", "Logo do JavaScript")}
            </div>            
        </article>
    `;
};

export default CardFrontBack;