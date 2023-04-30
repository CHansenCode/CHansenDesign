import React, { useState, useEffect } from "react";

export const Edit = ({ ...props }) => {
  //

  props = {
    ...props,
  };

  return (
    <>
      <section {...props}>{props.children}</section>

      <style jsx>
        {`
          section {
          }
        `}
      </style>
    </>
  );
};
