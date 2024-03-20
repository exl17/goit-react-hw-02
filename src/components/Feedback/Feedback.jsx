import React from 'react';
import styles from './Feedback.module.css';

function Feedback({ feedback, totalFeedback }) {
  if (totalFeedback === 0) {
    return (
      <div className={styles.notification}>
        No feedback yet
      </div>
    );
  }

  const positivePercentage = Math.round((feedback.good / totalFeedback) * 100);

  const positiveClass = positivePercentage > 50 ? styles.positiveBlue : styles.positiveRed;

  return (
    <div className={styles.feedback}>
      <p className={styles.good}>Good: {feedback.good}</p>
      <p className={styles.neutral}>Neutral: {feedback.neutral}</p>
      <p className={styles.bad}>Bad: {feedback.bad}</p>
      <p className={styles.total}>Total: {totalFeedback}</p>
      <p>
        Positive: <span className={`${styles.positive} ${positiveClass}`}>{positivePercentage}%</span>
      </p>
    </div>
  );
}

export default Feedback;
