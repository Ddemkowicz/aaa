import PropTypes from "prop-types";
import React from "react";
import css from "./Statistics.module.css";

const Statistics = (props) => {
  const { options, positive, total } = props;

  return (
    <div className={css.statistics}>
      <p>Good: {options.good}</p>
      <p>Neutral: {options.neutral}</p>
      <p>Bad: {options.bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positive}%</p>
    </div>
  );
};

export default Statistics;
