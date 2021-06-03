import Head from "next/head";
import styles from "../styles/Home.module.css";
import TrafficLight from "../components/TrafficLight";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <TrafficLight />
      </main>
    </div>
  );
}
