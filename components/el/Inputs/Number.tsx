import { Text } from "../Text";
import { Button } from "../Button";

import { useState } from "react";

export const Number = ({ ...props }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hoverInfo, setHoverInfo] = useState(false);

  function onClickHandler(changeValue: number) {
    props.onChange(props.value ? props.value : 0 + changeValue);
  }

  return (
    <>
      <div>
        <header>
          {props.label ? (
            <Text text={props.label} type="label" className="sc" />
          ) : (
            <div />
          )}

          {props.info && (
            <div
              onMouseEnter={() => setHoverInfo(true)}
              onMouseLeave={() => setHoverInfo(false)}
            >
              <Text
                text={props.info}
                type="h5"
                style={{ pointerEvents: "none" }}
              />
              <Button type="info" onClick={() => null} />
            </div>
          )}
        </header>
      </div>

      <aside>
        {props.largeIncrement && (
          <Button
            text={`-${props.largeIncrement}`}
            disabled={
              props.allowZero
                ? props.value - props.largeIncrement < 0
                : props.value - props.largeIncrement <= 0
            }
            onClick={() =>
              onClickHandler(
                props.largeIncrement ? props.largeIncrement : 0 * -1
              )
            }
          />
        )}

        <Button
          text={`- ${props.increment}`}
          disabled={
            props.allowZero
              ? props.value - props.increment < 0
              : props.value - props.increment <= 0
          }
          onClick={() =>
            onClickHandler(props.increment ? props.increment : 0 * -1)
          }
        />

        <Text text={`${props.value}`} />

        <Button
          text={`+ ${props.increment}`}
          onClick={() => onClickHandler(props.increment ? props.increment : 0)}
        />

        {props.largeIncrement && props.largeIncrement !== undefined && (
          <Button
            text={`-${props.largeIncrement}`}
            onClick={() =>
              onClickHandler(props.largeIncrement ? props.largeIncrement : 0)
            }
          />
        )}
      </aside>

      <style jsx>
        {`
          div {
            position: relative;
            height: 3rem;
            width: 100%;

            border: thin solid transparent;
          }

          header {
            height: 1rem;

            display: grid;
            grid-template-columns: 1fr auto;

            border: thin dashed transparent;
          }

          aside {
            height: 2rem;
            display: grid;
            grid-template-columns: ${props.largeIncrement
              ? "2rem 2rem auto 2rem 2rem"
              : "2rem auto 2rem"};
          }
        `}
      </style>
    </>
  );
};

type Props = {
  onChange: any;
  myRef?: any;
  value: number;

  label?: string;
  info?: string;

  increment: number;
  largeIncrement?: number;
  allowZero?: boolean;

  active?: boolean;
  disabled?: boolean;
};
