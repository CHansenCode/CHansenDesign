import React, { useState, useEffect } from "react";

type Props = {
  data: {};
  children?: React.ReactNode;
};

const Example = ({ ...props }: Props) => {
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

export default Example;
