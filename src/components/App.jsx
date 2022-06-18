import { useState } from 'react';

import Statistics from './feedback/statistics';
import Section from './feedback/section';
import FeedbackOptions from './feedback/feedbackOptions';
import Notification from './feedback/notification';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = state;
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const onLeaveFeedback = name => {
    setState(state => ({ ...state, [name]: state[name] + 1 }));
  };

  return (
    <>
      <Section title="Please, leave feedback">
        {/* <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} /> */}
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            stat={state}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
