import React from "react";
import PropTypes from "prop-types";
import "./GameInfo.scss";

function GameInfo({ date, publish, developer, title, platforms, genres }) {
  const listPlatforms = () => platforms.map((platform) => <li>{platform}</li>);
  return (
    <div className="game-info">
      <h2 className="ttl">{title}</h2>
      <h3>Release date</h3>
      <p className="rDate">{date}</p>
      <h3>Publisher</h3>
      <p className="pblshr">{publish}</p>
      <h3>Developer</h3>
      <p className="dvlpr">{developer}</p>
      <h3>Platforms</h3>
      <u1 className="pltfrms">{listPlatforms()}</u1>
      <h3>Genres</h3>
      <p className="gnrs">{genres}</p>
    </div>
  );
}

GameInfo.propTypes = {
  date: PropTypes.string.isRequired,
  publish: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  platforms: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  ).isRequired,
  genres: PropTypes.string.isRequired,
};

export default GameInfo;
