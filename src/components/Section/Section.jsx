import PropTypes from "prop-types";

const Section = (props) => {
  const { title } = props;
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
