import { result } from 'lodash';
import React from 'react';

const Result = ({score, playAgain}) => {
    return(
        <div className="score-board">
            <div className="score-review">
                <div className="review-emoji"></div>
                <div className="review-text"></div>
            </div>
            <div className="score">You scored {score} / 5 correct answer</div>
            <button className="playBtn" onClick={playAgain}>Play Again!</button>
        </div>
    )
}
export default Result;