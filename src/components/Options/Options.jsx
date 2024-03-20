import React from 'react';
import styles from './Options.module.css';

function Options({ updateFeedback, totalFeedback, resetFeedback }) {
  return (
    <div className={styles.buttons}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && <button className={styles.resetButton} onClick={resetFeedback}>Reset</button>}
    </div>
  );
}

export default Options;