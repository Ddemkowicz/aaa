import PropTypes from 'prop-types';
import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
  const { handleButtonClick } = props;

  return (
    <div>
      <button
        className={css.button}
        type="button"
        onClick={() => handleButtonClick('good')}
      >
        Good
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => handleButtonClick('neutral')}
      >
        Neutral
      </button>
      <button
        className={css.button}
        type="button"
        onClick={() => handleButtonClick('bad')}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};
export default FeedbackOptions;
