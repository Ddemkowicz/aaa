import PropTypes from 'prop-types';
import React from 'react';

const Section = props => {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
