import React, { useState, useEffect } from "react";

type Props = {
  type?: String;
  children?: React.ReactNode;
};

export const Button = ({ ...props }: Props) => {
  const {} = props;

  return (
    <>
      <div>
        <h4>My Layout</h4>
        {props.children}
      </div>
    </>
  );
};
