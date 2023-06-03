import { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;

  const handleButtonClick = (option) => {
    if (option === "good") {
      setGood(good + 1);
    } else if (option === "neutral") {
      setNeutral(neutral + 1);
    } else {
      setBad(bad + 1);
    }
  };

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
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};
