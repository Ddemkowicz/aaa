import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

export const App = () => {
  // const [good, setGood] = useState(0);
  // const [neutral, setNeutral] = useState(0);
  // const [bad, setBad] = useState(0);

  const [options, setOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const total = options.bad + options.good + options.neutral;
  const positive = Math.round((options.good / total) * 100);

  const handleButtonClick = (option) => {
    if (option === "good") {
      setOptions(options.good + 1);
    } else if (option === "neutral") {
      setOptions(options.neutral + 1);
    } else if (option === "bad") {
      setOptions(options.bad + 1);
    }
  };
  // const handleButtonClick = (option) => {
  //   if (option === "good") {
  //     setGood(good + 1);
  //   } else if (option === "neutral") {
  //     setNeutral(neutral + 1);
  //   } else {
  //     setBad(bad + 1);
  //   }
  // };

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
          // good={good}
          // neutral={neutral}
          // bad={bad}
          options={options}
          total={total}
          positive={positive}
        />
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};
