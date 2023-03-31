function PlayerScore(points = 0) {
    return /*html*/`
        <ol data-points="${points}">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ol>
    `;
};

export default PlayerScore;