import { Text } from "../Text";
import { Button } from "../Button";

import { useState } from "react";

export const Option = ({ ...props }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hoverInfo, setHoverInfo] = useState(false);

  return (
    <>
      <div onClick={props.onClick}>
        <Text type={"h5"} text={`${props.value}`} />
      </div>

      <style jsx>
        {`
          div {
          }
        `}
      </style>
    </>
  );
};

type Props = {
  onClick: any;
  myRef?: any;
  value?: number;

  active?: boolean;
  disabled?: boolean;
};
