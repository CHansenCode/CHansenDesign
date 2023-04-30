import React, { useState, useEffect } from "react";

export const Example = ({ ...props }: Props) => {
  const { data } = props;

  props = {
    ...props,
  };

  return (
    <>
      <div>{props.children}</div>

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
  data: {};
  children?: React.ReactNode;
};
