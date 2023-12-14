import { Text } from "../";

import styles from "./Loading.module.css";

export const Loading = (props: any) => {
  const iStyle = {
    border: props.border && props.border,
    margin: props.margin && props.margin,
  };

  return (
    <div className={styles.wrapper}>
      <Text text="Loading" bold={true} />
    </div>
  );
};
