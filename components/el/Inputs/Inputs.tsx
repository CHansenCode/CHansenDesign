import { Input } from "./Input";
import { Textarea } from "./Textarea";

export const Inputs = ({ ...props }: Props) => {
  switch (props.type) {
    case "input":
      return (
        <Input
          myRef={props.myRef}
          onChange={props.onChange}
          value={props.value}
          label={props.label}
          info={props.info}
          active={props.active}
          disabled={props.disabled}
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

  type?: "input" | "textarea" | "number" | "select" | "qrScanner" | "image";
  label?: string;
  info?: string;

  rows?: number;

  active?: boolean;
  disabled?: boolean;
};
