import React from "react";
import PropTypes from "prop-types";
import "./GameInfo.scss";

function GameInfo({date, publish, developer, title, platforms, genres}) {
  return (
    <div className="game-info">
      <h3>Release date: {date} </h3>
      <h3>Publisher: {publish}</h3>
      <h3>Developer: {developer} </h3>
      <h3>Title: {title}</h3>
      <h3>Platforms: {platforms}</h3>
      <h3>Genres: {genres}</h3>
    </div>
  );
}

GameInfo.propTypes = {
  date: PropTypes.number.isRequired,
  publish: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
};

export default GameInfo;
