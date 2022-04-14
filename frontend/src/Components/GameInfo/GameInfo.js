import React from "react";
import './GameInfo.scss';
import PropTypes from 'prop-types';

function GameInfo ({date, publish, developer}) {
    return (
        <div className="gameinfo"> 
            <h3>Release date: {date} </h3> 
            <h3>Publisher: {publish}</h3>
            <h3>Developer: {developer} </h3>
        </div>
    );
}


GameInfo.propTypes = {
    date: PropTypes.number.isRequired,
    publish: PropTypes.string.isRequired,
    developer: PropTypes.string.isRequired,
};

export default GameInfo;
