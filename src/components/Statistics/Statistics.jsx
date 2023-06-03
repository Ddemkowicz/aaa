import PropTypes from "prop-types";
import React from "react";
import css from "./Statistics.module.css";

const Statistics = (props) => {
  const { good, neutral, bad, total } = props;
  const positive = Math.round((good / total) * 100);
  return (
    <div className={css.statistics}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positive}%</p>
    </div>
  );
};

export default Statistics;
