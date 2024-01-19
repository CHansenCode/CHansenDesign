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
          {largeIncrement ? (
            <Button
              style={{ ...buttonStyle }}
              disabled={largeIncrement * -1 + value < 0 && !canGoNegative}
              text={`- ${largeIncrement}`}
              onClick={() =>
                largeIncrement ? handleCallBack(largeIncrement * -1) : null
              }
            />
          ) : (
            <div />
          )}

          <Button
            style={{ ...buttonStyle }}
            disabled={increment * -1 + value < 0 && !canGoNegative}
            text={`- ${increment}`}
            onClick={() => handleCallBack(increment * -1)}
          />

          <div className={styles.numberDisplay}>
            <Text type="subtitle" text={`${value}`} />
          </div>

          <Button
            style={{ ...buttonStyle }}
            text={`+ ${increment}`}
            onClick={() => handleCallBack(increment)}
          />

          {largeIncrement ? (
            <Button
              style={{ ...buttonStyle }}
              text={`+ ${largeIncrement}`}
              onClick={() =>
                largeIncrement ? handleCallBack(largeIncrement) : null
              }
            />
          ) : (
            <div />
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
  width: "1.75rem",
  height: "1.75rem",
  padding: "0.15rem",
  borderRadius: "50%",
  fontSize: "0.7rem",
};
