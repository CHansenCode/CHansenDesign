import { useState } from "react";

import { Text, Button } from "../";

import styles from "./List.module.css";

export function List(props: PropTypes) {
  const [state, setState] = useState({ open: false });

  function onItemClick(props: any, cb: string) {
    setState({ ...state, open: false });
    props.itemClick(cb);
  }

  return (
    <>
      <section className={styles.wrapper}>
        <header
          className={styles.header}
          onClick={() => setState({ ...state, open: !state.open })}
        >
          {props.value}
          {/* {props.placeholder ? props.placeholder : "cow"} */}

          <Button
            height="1.5rem"
            width="1.5rem"
            style={{ borderRadius: "50%", padding: "0.3rem" }}
            type="down"
          />
        </header>

        <ul
          className={`bg ${styles.list} ${
            state.open ? ` ${styles.listOpen}` : ""
          }`}
          onMouseLeave={() => setState({ ...state, open: false })}
        >
          {props.list.map((a: ItemType, i: number) => (
            <ListItem
              key={`itemList${a.display}${i}`}
              display={a.display}
              onClickReturn={a.onClickReturn}
              onClick={(cb: string) => onItemClick(props, cb)}
            />
          ))}
        </ul>
      </section>
    </>
  );
}

interface PropTypes {
  value: string;
  list: [{ display: string; onClickReturn: string }];
  label: string;
  itemClick?: any;
  placeholder?: string;
}

const ListItem = ({ ...props }: ItemType) => {
  return (
    <li
      className={styles.item}
      onClick={() => props.onClick(props.onClickReturn)}
    >
      <Text type="h5" text={props.display} />
    </li>
  );
};

interface ItemType {
  display: string;
  onClickReturn: string;
  onClick?: any;
}
