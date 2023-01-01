import React, { useState, useEffect } from "react";

type Props = {
  type?: string;
  text?: string;
  children?: React.ReactNode;
};

export const Button = ({ ...props }: Props) => {
  const {} = props;

  return (
    <>
      <button className="pc5b">{props.text}</button>

      <style jsx>
        {`
          button {
            background: transparent;

            padding: 0;
            margin: 0;

            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </>
  );
};
