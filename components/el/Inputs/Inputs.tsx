import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { Rich } from "./Rich";

import { File } from "./File";

export const Inputs = ({ ...props }: Props) => {
  switch (props.type) {
    case "input":
      return (
        <Input
          myRef={props.myRef}
          onChange={props.onChange}
          value={props.value}
          label={props.label}
          labelClass={props.labelClass}
          style={props.style}
          info={props.info}
          active={props.active}
          disabled={props.disabled}
          placeholder={props.placeholder}
        />
      );
      break;
    case "textarea":
      return (
        <Textarea
          myRef={props.myRef}
          onChange={props.onChange}
          value={props.value}
          label={props.label}
          info={props.info}
          active={props.active}
          disabled={props.disabled}
          rows={props.rows}
        />
      );
      break;
    case "number":
      return <>number type</>;
      break;
    case "select":
      return <>Select type</>;
      break;
    case "qrScanner":
      return <>qrScanner type</>;
      break;
    case "image":
      return <>Image type</>;

    case "file":
      return (
        <File
          myRef={props.myRef}
          onChange={props.onChange}
          value={props.value}
          label={props.label}
          info={props.info}
          active={props.active}
          disabled={props.disabled}
        />
      );
    case "rich":
      return (
        <Rich
          onChange={props.onChange}
          value={props.value}
          active={props.active}
          disabled={props.disabled}
          myRef={props.myRef}
          placeholder={props.placeholder}
        />
      );

    default:
      return (
        <Input
          onChange={props.onChange}
          value={props.value}
          label={props.label}
          info={props.info}
          active={props.active}
          disabled={props.disabled}
        />
      );
      break;
  }
};

type Props = {
  onChange?: any;
  value?: string | number | undefined;
  myRef?: any;
  placeholder?: string;

  type?:
    | "input"
    | "textarea"
    | "number"
    | "select"
    | "qrScanner"
    | "image"
    | "file"
    | "rich";
  label?: string;
  labelClass?: string;
  info?: string;

  style?: object;
  rows?: number;

  active?: boolean;
  disabled?: boolean;
};
