import { Text } from "../Text";
import { Button } from "../Button";

import { InputHeader } from "./InputHeader";

import { useState } from "react";

import styles from "./Select.module.css";

export const Select = ({ ...props }: Props) => {
  return (
    <div className={styles.wrapper}>
      <InputHeader label={props.label} info={props.info} />

      <ul className={styles.optionsWrapper}>
        {props.values.length ? (
          props.values.map((a, i) => (
            <Option
              key={`${i}${a}selOpt`}
              value={a}
              onClick={() => props.onClick(a)}
              active={props.value === a}
            />
          ))
        ) : (
          <>no values provided</>
        )}
      </ul>
    </div>
  );
};

type Props = {
  myRef?: any;
  value?: number;

  label?: string;
  info?: string;

  values: any[];
  onClick: any;

  active?: boolean;
  disabled?: boolean;
};

const Option = ({ ...props }) => {
  return (
    <div
      className={`${styles.option} ${props.active ? "sc" : ""}`}
      onClick={() => props.onClick()}
    >
      {props.value}
    </div>
  );
};
