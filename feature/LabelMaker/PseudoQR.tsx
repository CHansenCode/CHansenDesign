import { useEffect, useRef } from "react";
import { Button, Text } from "../../components";
import QRCode from "react-qr-code";

import styles from "./PseudoQR.module.css";

export function PseudoQR({ ...props }: PropTypes) {
  let { state, setState, labelArray } = props;

  const myRef = useRef() as any;

  useEffect(() => {
    myRef.current && generateQR();
  }, [state.horizontalRepeats, state.verticalRepeats]);

  useEffect(() => {
    if (state.paths.length === 0) {
      console.log("it is 0 !");
    }
    state.paths.length === 0 && generateQR();
  }, []);

  function generateQR() {
    let paths: any = [];
    let arr = [...myRef.current.children];
    arr.length > 0 &&
      arr.forEach((a: any) => paths.push(a.children[0].getAttribute("d")));
    setState({ ...state, paths: paths });
  }

  return (
    <div ref={myRef} className={styles.container}>
      {labelArray.length &&
        labelArray.map((a: any, i: number) => (
          <QRCode
            key={`QRCODE${i}${a}`}
            style={{ maxWidth: "256px", maxHeight: "256px", margin: "0.25rem" }}
            value={`${state.midRow}${returnValues(state.index + i)}`}
          />
        ))}
    </div>
  );
}

interface PropTypes {
  state: any;
  setState: any;
  pageArray: number[];
  labelArray: number[];
}

function returnValues(index: number) {
  if (index < 10) {
    return `00000${index}`;
  }
  if (index < 100) {
    return `0000${index}`;
  }
  if (index < 1000) {
    return `000${index}`;
  }
  if (index < 10000) {
    return `00${index}`;
  }
  if (index < 100000) {
    return `0${index}`;
  }
  return `${index}`;
}
