import { H1, H2, H3, H4, H5, H6, Para, Label, Annotation } from "./";

export const Text = ({ ...props }: Props) => {
  switch (props.type) {
    case "h1":
      return <H1 {...props} />;
      break;
    case "h2":
      return <H2 {...props} />;
      break;
    case "h3":
      return <H3 {...props} />;
      break;
    case "h4":
      return <H4 {...props} />;
      break;
    case "h5":
      return <H5 {...props} />;
      break;
    case "h6":
      return <H6 {...props} />;
      break;
    case "label":
      return <Label {...props} />;
    case "annotation":
      return <Annotation {...props} />;
    case "p":
      return <Para {...props} />;
      break;

    default:
      return <Para {...props} />;
      break;
  }
};

type Props = {
  text: string;
  type?: string;
  bold?: boolean;

  className?: string;
  style?: any;

  margin?: string;

  //for passing classname etc
  props?: any;
};
