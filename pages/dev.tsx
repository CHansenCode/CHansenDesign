import React, { useState, useEffect, useRef } from "react";

import { PDFViewer } from "@react-pdf/renderer";
import { Page, Text, View, Document } from "@react-pdf/renderer";
import { StyleSheet, Svg, Path, Rect } from "@react-pdf/renderer";
import { Number } from "../components/el/Inputs";
import { Input } from "../components/el/Inputs";

import { LabelMaker } from "../feature/LabelMaker";

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
        <LabelMaker />
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
    tempIndex: 1,
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
