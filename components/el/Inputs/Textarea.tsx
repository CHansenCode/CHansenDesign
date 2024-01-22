import { useState } from "react";

import { InputHeader } from "./InputHeader";

import styles from "./Textarea.module.css";

export const Textarea = ({ ...props }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  function onChange(e: any) {
    e.preventDefault();
    props.onChange(e.target.value);
  }

  const iStyle = {
    opacity: props.disabled ? 0.5 : 1,
    PointerEvents: props.disabled ? "none" : "all",
  };

  return (
    <>
      <div className={styles.wrapper}>
        <InputHeader label={props.label} info={props.info} active={isFocused} />

        <textarea
          className={`${styles.textarea} ${isFocused ? styles.active : ""}`}
          ref={props.myRef}
          value={props.value}
          rows={props.rows}
          style={iStyle}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={props.disabled ? props.disabled : false}
          onChange={(e: any) => onChange(e)}
        ></textarea>

        <span
          className={`${styles.pseudoBorder} ${
            isFocused ? `${styles.focused} sc` : ""
          }`}
        />
      </div>

      <style jsx>
        {`
          .pseudoborder {
            position: absolute;
            top: 100%;
            left: ${isFocused ? "-2%" : "0"};
            width: ${isFocused ? "104%" : "100%"};

            border-bottom: ${props.active ? "2px" : "1px"} solid;

            transition: 0.4s ease;
            opacity: ${isFocused ? "1" : "0.3"};
          }
        `}
      </style>
    </>
  );
};

type Props = {
  onChange: any;
  value: string;
  myRef?: any;

  label?: string;
  info?: string;
  rows?: number;

  active?: boolean;
  disabled?: boolean;
};
