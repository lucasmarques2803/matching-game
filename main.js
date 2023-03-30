import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import ScoreBoard from "./src/objects/ScoreBoard";
import BoardGame from "./src/objects/BoardGame";
import PlayerArrow from "./src/components/PlayerArrow";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML(
    "beforeend",
    `
        ${PlayerArrow()}
        ${ScoreBoard()}
        ${BoardGame(6)}
    `
);