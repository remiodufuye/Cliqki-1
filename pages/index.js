import { useState } from "react";
import Head from "next/head";
import { countdownTimer } from "../helpers";
import CountDownTimer from "../components/CountdownTimer/CountDownTimer";
import styles from "./countdown.module.css";

const index = () => {
  const [time, setTimer] = useState({});

  setInterval(() => {
    let duration = countdownTimer("5 feb 2021 00:00:00");
    setTimer(duration);
  }, 0);

  const {
    daysRemaining,
    hoursRemaining,
    minutesRemaining,
    secondsRemaining,
  } = time;

  return (
    <div className="backgroundImageAnimation">
    <div className={styles.container}>
      <Head>
        <title>Cliqki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {daysRemaining === 0 &&
        hoursRemaining === 0 &&
        minutesRemaining === 0 &&
        secondsRemaining === 0 ? (
          <div className={styles.heading}>We have launched</div>
        ) : (
          <CountDownTimer time={time} />
        )}
      </main>
    </div></div>
  );
};

export default index;
