import styles from "../styles/Home.module.css";

export default function Light({ color, lightOn }) {
  console.log(styles.light);
  return (
    <div
      className={styles.light}
      data-state={lightOn}
      style={{ backgroundColor: `${color}` }}
    />
  );
}
