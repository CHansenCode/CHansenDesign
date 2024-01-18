import { Text, Button } from "../";

import styles from "./Number.module.css";

export function Number({ ...props }: Props) {
  let {
    label,
    labelClass,
    className,
    value,
    increment,
    largeIncrement,
    canGoNegative,
    onClick,
  } = props;

  async function handleCallBack(val: number) {
    if (val + value < 0 && !canGoNegative) {
      return;
    }

    onClick(val + value);
  }

  return (
    <div
      style={{ ...props.style }}
      className={`${styles.wrapper} ${className}`}
    >
      <header className={styles.header}>
        <Text type="label" text={`${label}`} className={`${labelClass}`} />
      </header>

      <div className={styles.container}>
        <div className={styles.number}>
          {largeIncrement && (
            <Button
              style={{ ...buttonStyle }}
              disabled={largeIncrement * -1 + value < 0 && !canGoNegative}
              text={`- ${largeIncrement}`}
              onClick={() =>
                largeIncrement ? handleCallBack(largeIncrement * -1) : null
              }
            />
          )}

          <Button
            style={{ ...buttonStyle }}
            disabled={increment * -1 + value < 0 && !canGoNegative}
            text={`- ${increment}`}
            onClick={() => handleCallBack(increment * -1)}
          />

          <div className={styles.numberDisplay}>
            <Text type="subtitle" style={{ ...textStyle }} text={`${value}`} />
          </div>

          <Button
            style={{ ...buttonStyle }}
            text={`+ ${increment}`}
            onClick={() => handleCallBack(increment)}
          />

          {largeIncrement && (
            <Button
              style={{ ...buttonStyle }}
              text={`+ ${largeIncrement}`}
              onClick={() =>
                largeIncrement ? handleCallBack(largeIncrement) : null
              }
            />
          )}
        </div>
      </div>
    </div>
  );
}

type Props = {
  label?: string;
  labelClass?: string;

  value: number;
  increment: number;
  largeIncrement?: number;
  canGoNegative?: boolean;

  style?: object;
  className?: string;

  onClick: any;
};

const buttonStyle = {
  width: "2.5rem",
  height: "2.5rem",
  padding: "0.5rem",
  borderRadius: "50%",
};
const textStyle = {
  textAlign: "center",
  width: "100%",
};
