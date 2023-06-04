import { useState, useEffect } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";
import PropTypes from "prop-types";

export const App = () => {
  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const total = options.bad + options.good + options.neutral;
  const positive = Math.round((options.good / total) * 100);

  const handleButtonClick = (option) => {
    if (option === "good") {
      setOptions({ ...options, good: options.good + 1 });
    } else if (option === "neutral") {
      setOptions({ ...options, neutral: options.neutral + 1 });
    } else if (option === "bad") {
      setOptions({ ...options, bad: options.bad + 1 });
    }
  };

  useEffect(() => {
    handleButtonClick();
  }, [options]);

  return (
    <div
      style={{
        backgroundColor: "rgb(151, 151, 151)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 40,
        color: "#010101",
      }}
    >
      <Section title="Please leave feedback" />
      <FeedbackOptions handleButtonClick={handleButtonClick} />
      <Section title="Statistics" />
      {total > 0 ? (
        <Statistics
          good={options.good}
          neutral={options.neutral}
          bad={options.bad}
          total={total}
          positive={positive}
        />
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};

App.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    })
  ),
};
