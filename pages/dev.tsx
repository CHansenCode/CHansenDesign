import { useState, useEffect } from "react";

import ReactPDF, { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { Number } from "../components/el/Inputs";

export default function ContactPage() {
  const [state, setState] = useState({ img: "", hori: 1 });

  async function generateQR() {
    let svg = document.createElement("div");
  }

  return (
    <>
      <section>
        <Number
          label="cow"
          increment={1}
          canGoNegative={true}
          value={state.hori}
          onClick={(cb: number) => setState({ ...state, hori: cb })}
        />

        <ViewPDF>
          <PDF />
        </ViewPDF>

        {/* <PDF /> */}
      </section>
    </>
  );
}

const ViewPDF = (props: any) => {
  const [state, setState] = useState({ init: false });

  const styles = StyleSheet.create({
    document: {
      height: "31.7rem",
      width: "21rem",
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

const PDF = () => {
  const [state, setState] = useState({ init: false });

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#E4E4E4",
      border: "thin solid red",
    },
    section: {
      border: "currentColor",
      padding: "10mm",
      height: "20mm",
    },
  });

  useEffect(() => {
    setState({ ...state, init: true });
  }, []);

  return state.init ? (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View>
          <Text>Section #2</Text>
        </View>
        <View>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  ) : (
    <>loading...</>
  );
};
