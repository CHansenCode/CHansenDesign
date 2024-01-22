import { Text, Button } from "../";

import styles from "./InputHeader.module.css";

export const InputHeader = ({ ...props }: PropTypes) => {
  return (
    <header className={`${styles.header} ${props.active ? "sc" : ""}`}>
      {props.label ? <Text text={props.label} type="label" /> : <div />}

      {props.info ? (
        <div>
          <Text text={props.info} type="h5" style={{ pointerEvents: "none" }} />
          <Button type="info" onClick={() => null} />
        </div>
      ) : (
        <div />
      )}
    </header>
  );
};

interface PropTypes {
  label?: string;
  labelClass?: string;
  info?: string;
  active?: boolean;
}
