import { Number } from "../../components/el/Inputs";
import { Input } from "../../components/el/Inputs";
import { Button } from "../../components";

import styles from "./Controller.module.css";

export function Controller({ ...props }: PropTypes) {
  let { state, setState } = props;

  return (
    <div className={styles.container}>
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
        onClick={(cb: number) => setState({ ...state, horizontalRepeats: cb })}
      />
      <Number
        label="Vertical Repeats"
        increment={1}
        largeIncrement={5}
        labelClass="sc"
        value={state.verticalRepeats}
        onClick={(cb: number) => setState({ ...state, verticalRepeats: cb })}
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
      <Input
        label="Dangerous index changer!!!"
        value={state.tempIndex}
        placeholder="Mid row value"
        onChange={(cb: string) =>
          setState({ ...state, tempIndex: parseInt(cb) })
        }
      />
      <Button
        text="set dangerous index"
        onClick={() => setState({ ...state, index: state.tempIndex })}
      />
      {/* <Button text="generateQR" onClick={() => testing()} /> */}
      <Button text="console log state" onClick={() => console.log(state)} />
    </div>
  );
}

interface PropTypes {
  state: any;
  setState: any;
}
