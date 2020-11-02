import { useState } from "react";
import Head from "next/head";
import { countdownTimer } from "../../helpers";
import styles from "./countdown.module.css";
import CountDownTimer from "../../components/CountdownTimer/CountDownTimer";

const index = () => {
  const [time, setTimer] = useState(null);

  setInterval(() => {
    let duration = countdownTimer("Dec 25, 2020 00:00:00");
    setTimer(duration);
  }, 0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cliqki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {time && <CountDownTimer time={time} />}
      </main>
    </div>
  );
};

export default index;
