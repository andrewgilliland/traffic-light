import Light from '../components/Light'
import styles from "../styles/Home.module.css";

export default function TrafficLight() {
    return (
        <div className={styles.lightContainer}>
            <Light color="red" />
            <Light color="yellow"/>
            <Light color="green" />
        </div>
    )
}