import { useState } from "react";
import Head from "next/head";
import { countdownTimer } from "../../helpers";
import styles from "./countdown.module.css";

const index = () => {
  const [time, setTimer] = useState(null);

  setInterval(() => {
    let duration = countdownTimer("Sep 30, 2021 00:00:00");
    setTimer(duration);
  }, 0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cliqki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {time && (
          <div id="countdown">
            <ul>
              <li className={styles.timer}>
                <span className={styles.timerText}>{time.daysRemaining}</span>days
              </li>
              <li className={styles.timer}>
                <span className={styles.timerText}>{time.hoursRemaining}</span>Hours
              </li>
              <li className={styles.timer}>
                <span className={styles.timerText}>{time.minutesRemaining}</span>Minutes
              </li>
              <li className={styles.timer}>
                <span className={styles.timerText}>{time.secondsRemaining}</span>Seconds
              </li>
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

export default index;
