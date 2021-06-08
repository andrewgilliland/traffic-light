import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";

import Light from "../components/Light";
import styles from "../styles/Home.module.css";

const lightMachine = createMachine({
  // Machine identifier
  id: "light",

  // Initial state
  initial: "red",
  // State definitions
  states: {
    green: {
      on: {
        CHANGE_TO_YELLOW: "yellow",
      },
    },
    yellow: {
      on: {
        CHANGE_TO_RED: "red",
      },
    },
    red: {
      on: {
        CHANGE_TO_GREEN: "green",
      },
    },
  },
});

export default function TrafficLight() {
  return (
    <div className={styles.lightContainer}>
      <Light color="red" />
      <Light color="yellow" />
      <Light color="green" />
    </div>
  );
}
