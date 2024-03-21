import React from 'react';
import styles from './Feedback.module.css';

function Feedback({ feedback, totalFeedback, positivePercentage }) {
  if (totalFeedback === 0) {
    return (
      <div className={styles.notification}>
        No feedback yet
      </div>
    );
  }

  return (
    <div className={styles.feedback}>
      <p className={styles.good}>Good: {feedback.good}</p>
      <p className={styles.neutral}>Neutral: {feedback.neutral}</p>
      <p className={styles.bad}>Bad: {feedback.bad}</p>
      <p className={styles.total}>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}

export default Feedback;
