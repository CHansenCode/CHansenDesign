import React, { useState, useEffect, useRef } from "react";

import { PDFViewer } from "@react-pdf/renderer";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { StyleSheet, Svg, Path, Rect } from "@react-pdf/renderer";
import { Number } from "../components/el/Inputs";
import { Input } from "../components/el/Inputs";

import QRCode from "react-qr-code";
import { Button } from "../components";

import styles from "./dev.module.css";

export default function ContactPage() {
  const [state, setState] = useState({ ...init.state });

  let mmVert =
    (state.totHeight - state.marginTop - state.marginBottom) /
    state.verticalRepeats;
  let mmHori =
    (state.totWidth - state.marginLeft - state.marginRight) /
    state.horizontalRepeats;

  let proportion = mmHori / mmVert;

  useEffect(() => {
    setState({ ...state, init: true });
  }, []);

  const myRef = useRef() as any;

  let arrayBoxes = Array.from(
    Array(state.horizontalRepeats * state.verticalRepeats),
    (x, i) => i + 1
  );

  function testing() {
    let paths: any = [];
    // state.init &&
    //   myRef.current.children.forEach((a: any, i: number) =>
    //     paths.push(a.children[0].getAttribute("d"))
    //   );

    let arr = [...myRef.current.children];
    arr.length > 0 &&
      arr.forEach((a: any) => paths.push(a.children[0].getAttribute("d")));

    setState({ ...state, paths: paths });
  }

  return (
    <>
      <section>
        <div
          style={{
            position: "fixed",
            top: "2rem",
            left: "12rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            opacity: 1,
            pointerEvents: "all",
          }}
        >
          <Number
            label="Starting Index"
            increment={1}
            largeIncrement={5}
            labelClass="sc"
            value={state.index}
            onClick={(cb: number) => setState({ ...state, index: cb })}
          />
          <Input
            label="Top row"
            value={state.topRow}
            placeholder="top row value"
            onChange={(cb: string) => setState({ ...state, topRow: cb })}
          />
          <Input
            label="Mid row"
            value={state.midRow}
            placeholder="Mid row value"
            onChange={(cb: string) => setState({ ...state, midRow: cb })}
          />
          <Number
            label="Horizontal Repeats"
            increment={1}
            largeIncrement={5}
            labelClass="sc"
            value={state.horizontalRepeats}
            onClick={(cb: number) =>
              setState({ ...state, horizontalRepeats: cb })
            }
          />
          <Number
            label="Vertical Repeats"
            increment={1}
            largeIncrement={5}
            labelClass="sc"
            value={state.verticalRepeats}
            onClick={(cb: number) =>
              setState({ ...state, verticalRepeats: cb })
            }
          />
          <Number
            label="TopMargin"
            increment={1}
            largeIncrement={5}
            labelClass="sc"
            canGoNegative={true}
            value={state.marginTop}
            onClick={(cb: number) => setState({ ...state, marginTop: cb })}
          />
          <Number
            label="Right Margin"
            increment={1}
            largeIncrement={5}
            labelClass="sc"
            canGoNegative={true}
            value={state.marginRight}
            onClick={(cb: number) => setState({ ...state, marginRight: cb })}
          />
          <Number
            label="Bottom Margin"
            increment={1}
            largeIncrement={5}
            labelClass="sc"
            canGoNegative={true}
            value={state.marginBottom}
            onClick={(cb: number) => setState({ ...state, marginBottom: cb })}
          />
          <Number
            label="Left Margin"
            increment={1}
            largeIncrement={5}
            labelClass="sc"
            canGoNegative={true}
            value={state.marginLeft}
            onClick={(cb: number) => setState({ ...state, marginLeft: cb })}
          />
          <Number
            label="Font size"
            increment={1}
            largeIncrement={5}
            labelClass="sc"
            canGoNegative={true}
            value={state.fontSize}
            onClick={(cb: number) => setState({ ...state, fontSize: cb })}
          />
          <Number
            label="Vertical Gap"
            increment={1}
            largeIncrement={5}
            labelClass="sc"
            canGoNegative={true}
            value={state.verticalGap}
            onClick={(cb: number) => setState({ ...state, verticalGap: cb })}
          />
          <Number
            label="Horizontal Gap"
            increment={1}
            largeIncrement={5}
            labelClass="sc"
            canGoNegative={true}
            value={state.horizontalGap}
            onClick={(cb: number) => setState({ ...state, horizontalGap: cb })}
          />
          <Button text="generateQR" onClick={() => testing()} />
          <Button text="console log state" onClick={() => console.log(state)} />
        </div>

        <div
          ref={myRef}
          style={{ opacity: 0, pointerEvents: "none" }}
          className={styles.qrContainer}
        >
          {arrayBoxes.length &&
            arrayBoxes.map((a: any, i: number) => (
              <QRCode
                value={`${state.midRow}${returnValues(state.index + i)}`}
              />
            ))}
        </div>

        <ViewPDF>
          {arrayBoxes.length && <PDF state={state} arrBoxes={arrayBoxes} />}
        </ViewPDF>

        <img src={state.img} />

        {/* <h6>{state.img}</h6> */}
      </section>
    </>
  );
}

const PDF = ({ ...props }: PDFPROPS) => {
  const [state, setState] = useState({ init: false });

  let attr = props.state;

  const styles = StyleSheet.create({
    page: {
      paddingTop: `${props.state.marginTop}mm`,
      paddingRight: `${props.state.marginRight}mm`,
      paddingBottom: `${props.state.marginBottom}mm`,
      paddingLeft: `${props.state.marginLeft}mm`,
      flexGrow: 3,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "0",
    },
    section: {
      position: "relative",
      height: `${
        (attr.totHeight - attr.marginTop - attr.marginBottom) /
        attr.verticalRepeats
      }mm`,
      width: `${
        (attr.totWidth - attr.marginLeft - attr.marginRight) /
        attr.horizontalRepeats
      }mm`,
    },
    svg: {
      position: "absolute",
      top: "0.75mm",
      left: "-8.5mm",
    },
    textHeader: {
      position: "absolute",
      left: "12mm",
      top: "0.8mm",
      fontSize: 6,
    },
    textBody: {
      position: "absolute",
      left: "12mm",
      top: "3.2mm",
      fontSize: 6,
    },
    textNumber: {
      position: "absolute",
      left: "12mm",
      top: "5.5mm",
      fontSize: 6,
    },
  });

  useEffect(() => {
    setState({ ...state, init: true });
  }, []);

  return state.init ? (
    <Document>
      <Page size="A4" style={styles.page}>
        {props.arrBoxes.map((a, i) => (
          <View style={styles.section}>
            <Svg height="80%" viewBox="0 0 21 21" style={styles.svg}>
              <Rect x="0" y="0" height="21" width="21" fill="black" />
              <Path fill="white" d={attr.paths[i]} />
            </Svg>

            <Text style={styles.textHeader}>{attr.topRow}</Text>
            <Text style={styles.textBody}>{attr.midRow}</Text>
            <Text style={styles.textNumber}>{`${returnValues(
              attr.index + i
            )}`}</Text>
          </View>
        ))}
      </Page>
    </Document>
  ) : (
    <>loading...</>
  );
};

const ViewPDF = (props: any) => {
  const [state, setState] = useState({ init: false });

  const styles = StyleSheet.create({
    document: {
      height: `${80}rem`,
      width: `${60}rem`,
    },
  });

  useEffect(() => {
    setState({ ...state, init: true });
  }, []);

  return state.init ? (
    <PDFViewer style={styles.document}>{props.children}</PDFViewer>
  ) : (
    <>Loading...</>
  );
};

interface PDFPROPS {
  state?: any;
  arrBoxes: number[];
}

const init = {
  state: {
    index: 1,
    topRow: "PCBA no 5G",
    midRow: "3apcn",
    img: "",
    horizontalRepeats: 7,
    verticalRepeats: 27,
    marginTop: 8,
    marginBottom: 9,
    marginLeft: 4,
    marginRight: 4,
    totWidth: 210,
    totHeight: 297,
    fontSize: 10,
    horizontalGap: 2.3,
    verticalGap: 0,
    mode: "portrait",
    images: [],
    paths: [],
    init: false,
  },
};

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
