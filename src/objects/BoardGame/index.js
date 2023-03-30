import CardGame from "../../components/CardGame";

function BoardGame(amountCards) {
    return CardGame().repeat(amountCards);
};

export default BoardGame;