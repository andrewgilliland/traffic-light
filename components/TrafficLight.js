import { createMachine } from "xstate";
import { useMachine } from "@xstate/react";

import Light from "../components/Light";
import styles from "../styles/Home.module.css";

const lightMachine = createMachine({
  // Machine identifier
  id: "light",

  // Initial state
  initial: "green",
  // State definitions
  states: {
    green: {
      on: {
        CHANGE_TO_YELLOW: "yellow",
      },
      after: {
        2000: "yellow",
      },
    },
    yellow: {
      on: {
        CHANGE_TO_RED: "red",
      },
      after: {
        2000: "red",
      },
    },
    red: {
      on: {
        CHANGE_TO_GREEN: "green",
      },
      after: {
        2000: "green",
      },
    },
  },
});

export default function TrafficLight() {
  const [current, send] = useMachine(lightMachine);

  return (
    <div className={styles.flex}>
      <div className={styles.lightContainer}>
        <Light color="red" lightOn={current.matches("red")} />
        <Light color="yellow" lightOn={current.matches("yellow")} />
        <Light color="green" lightOn={current.matches("green")} />
      </div>
      {/* <pre>{JSON.stringify(current, null, 2)}</pre> */}
    </div>
  );
}
