import React from "react";
import PropTypes from "prop-types";
import "./GameInfo.scss";

function GameInfo({ date, publish, developer, title, platforms, genres }) {
  const listItems = (item) =>
    item.map((items) => <li key={items.toString()}>{items}</li>);
  return (
    <div className="game-info">
      <h2 className="game-info__title">{title}</h2>
      <h3>Release date</h3>
      <p className="game-info__rDate">{date}</p>
      <h3>Publisher</h3>
      <p className="game-info__publisher">{publish}</p>
      <h3>Developer</h3>
      <p className="game-info__developer">{developer}</p>
      <h3>Platforms</h3>
      <ul className="game-info__platforms">{listItems(platforms)}</ul>
      <h3>Genres</h3>
      <ul className="game-info__genres">{listItems(genres)}</ul>
    </div>
  );
}

GameInfo.propTypes = {
  date: PropTypes.string.isRequired,
  publish: PropTypes.string.isRequired,
  developer: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  platforms: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string]))
    .isRequired,
  genres: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])).isRequired,
};

export default GameInfo;
