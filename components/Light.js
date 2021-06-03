import styles from "../styles/Home.module.css";

export default function Light({ color }) {
  console.log(styles.light);
  return (
    <div className={styles.light} style={{ backgroundColor: `${color}` }} />
  );
}
