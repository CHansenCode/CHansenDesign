import React, { useState, useEffect } from "react";

type Props = {
  value: string | number;
};

export const Layout = ({ ...props }: Props) => {
  const {} = props;

  return (
    <>
      <div>
        <h4>My Layout</h4>
        <input value={props.value} />
      </div>

      <style jsx>
        {`
          input {
          }
        `}
      </style>
    </>
  );
};
