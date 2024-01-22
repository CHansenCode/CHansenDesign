import { useState } from "react";

import { Text } from "../../components";
import { Select, Number, Textarea } from "../../components/el/Inputs";

import styles from "./LabelDesigner.module.css";

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

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        {state.labelDesigner.elements.map((a: Element, i: number) => (
          <Element {...a} active={marker === i} onClick={() => setMarker(i)} />
        ))}
      </div>

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
        <Textarea
          label="text"
          value={state.labelDesigner.elements[marker].body}
          onChange={(cb: string) => changeElement(cb, "body")}
        />
      </div>
    </div>
  );
}

interface PropTypes {
  state: any;
  setState: any;
}

interface Element {
  type: string;
  data: any;
  top: number;
  left: number;
  body: string;
  active: boolean;
  i: number;
  onClick: any;
}

const Element = ({ ...props }: Element) => {
  const iStyle = {
    top: `${props.top}%`,
    left: `${props.left}%`,
    border: "thin solid currentColor",
  };

  return (
    <div
      className={`${styles.element} ${props.active ? `sc` : ``}`}
      style={iStyle}
      onClick={() => props.onClick()}
    >
      {<Text type="p" text={props.body} />}
      <div className={styles.pseudoPadding} />
    </div>
  );
};

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
