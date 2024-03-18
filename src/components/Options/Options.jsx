import React from 'react';
import styles from './Options.module.css';

const Options = () => {
  return (
    <div className={styles.buttons}>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
          <button className={styles.resetButton}>Reset</button>
          </div>
  );
};


export default Options;

