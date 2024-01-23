import { useState } from "react";

import { Text } from "../../components";
import { Select, Number, Textarea } from "../../components/el/Inputs";

import styles from "./LabelDesigner.module.css";
import QRCode from "react-qr-code";

export function LabelDesigner({ ...props }: PropTypes) {
  let [marker, setMarker] = useState(0);
  let { state, setState } = props;

  async function changeElement(incVal: any, key: string) {
    let arr = state.labelDesigner.elements.map((a: any, i: number) =>
      i === marker ? { ...a, [key]: incVal } : a
    );

    setState({
      ...state,
      labelDesigner: { ...state.labelDesigner, elements: arr },
    });
  }

  const iStyle = {
    preview: {
      height: `${10}rem`,
      width: `${10 / props.statistics.proportion}rem`,
    },
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Text type="h4" text="label preview" />
          <div>
            <Text type="h6" className="sc" text={`Label height:`} />
            <Text type="h6" text={`${props.statistics.labelHeight}mm`} />
          </div>
          <div>
            <Text type="h6" className="sc" text={`Label width:`} />
            <Text type="h6" text={`${props.statistics.labelWidth}mm`} />
          </div>
        </header>

        <div className={styles.view}>
          <div className={styles.viewContainer} style={iStyle.preview}>
            {state.labelDesigner.elements.map((a: Element, i: number) => (
              <Element
                {...a}
                active={marker === i}
                onClick={() => setMarker(i)}
              />
            ))}
          </div>
        </div>
      </div>

      <ul className={styles.elementList}>
        {state.labelDesigner.elements.map((a: Element, i: number) => (
          <li key={`something${a}${i}`} onClick={() => setMarker(i)}>
            {a.width}
          </li>
        ))}
      </ul>

      <div className={styles.elementController}>
        <Text text="Element Controller" className="sc" bold={true} />
        <Select
          label="type"
          value={state.labelDesigner.elements[marker].type}
          values={["text", "qr"]}
          onClick={(cb: any) => changeElement(cb, "type")}
        />
        <Number
          label="% Vertical position"
          increment={1}
          largeIncrement={10}
          value={state.labelDesigner.elements[marker].top}
          onClick={(val: number) => changeElement(val, "top")}
        />
        <Number
          label="% Horizontal position"
          increment={1}
          largeIncrement={10}
          value={state.labelDesigner.elements[marker].left}
          onClick={(val: number) => changeElement(val, "left")}
        />
        <Number
          label="% Height"
          increment={1}
          largeIncrement={10}
          value={state.labelDesigner.elements[marker].height}
          onClick={(val: number) => changeElement(val, "height")}
        />
        <Number
          label="% Width"
          increment={1}
          largeIncrement={10}
          value={state.labelDesigner.elements[marker].width}
          onClick={(val: number) => changeElement(val, "width")}
        />
        <Number
          label="fontSize"
          increment={1}
          largeIncrement={10}
          value={state.labelDesigner.elements[marker].fontSize}
          onClick={(val: number) => changeElement(val, "fontSize")}
        />
        <Textarea
          label="text"
          value={state.labelDesigner.elements[marker].body}
          onChange={(cb: string) => changeElement(cb, "body")}
        />
      </div>
    </div>
  );
}

const Element = ({ ...props }: Element) => {
  const iStyle = {
    wrapper: {
      top: `${props.top}%`,
      left: `${props.left}%`,
    },
    text: {
      fontSize: `${(props.fontSize / 100) * 10}rem`,
    },
    qr: {
      height: `${(props.height / 100) * 10}rem`,
      width: `${(props.width / 100) * 10}rem`,
    },
  };

  if (props.type === "qr") {
    return (
      <div
        className={`${styles.element} ${props.active ? `sc` : ``}`}
        style={iStyle.wrapper}
        onClick={() => props.onClick()}
      >
        <div className={styles.qr} style={iStyle.qr}>
          <QRCode value="placeholder" height="32" width="32" />
        </div>
      </div>
    );
  }

  console.log(iStyle.text.fontSize);

  return (
    <div
      className={`${styles.element} ${props.active ? `sc` : ``}`}
      style={iStyle.wrapper}
      onClick={() => props.onClick()}
    >
      <p style={iStyle.text}>{props.body}</p>
    </div>
  );
};

interface PropTypes {
  state: any;
  setState: any;
  statistics: any;
}

interface Element {
  type: string;
  data: any;
  top: number;
  left: number;
  height: number;
  width: number;
  body: string;
  active: boolean;
  i: number;
  fontSize: number;
  onClick: any;
}

const initElement = {
  type: "text",
  top: 0,
  left: 0,
  padding: 1,
  width: "",
  height: "",
  body: "",
  value: 0,
};
