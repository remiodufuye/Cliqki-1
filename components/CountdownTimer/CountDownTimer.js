import React from "react";
import styles from "./countdowntimer.module.css";

const CountDownTimer = ({ time }) => {
  return (
    <div>
      {time && (
        <ul>
          <li className={styles.timer}>
            <span className={styles.timerText}>{time.daysRemaining}</span>
            {time.daysRemaining > 1 ? "days" : "day"}
          </li>

          <li className={styles.timer}>
            <span className={styles.timerText}>{time.hoursRemaining}</span>
            {time.hoursRemaining > 1 ? "Hours" : "Hour"}
          </li>

          <li className={styles.timer}>
            <span className={styles.timerText}>{time.minutesRemaining}</span>
            {time.minutesRemaining > 1 ? "Minutes" : "Minute"}
          </li>

          <li className={styles.timer}>
            <span className={styles.timerText}>{time.secondsRemaining}</span>
            {time.secondsRemaining > 1 ? "Seconds" : "Second"}
          </li>
        </ul>
      )}
    </div>
  );
};

export default CountDownTimer;
