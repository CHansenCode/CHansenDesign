import { useState, useMemo, useEffect } from "react";
import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";
import styles from "./Rich.module.css";

export const Rich = ({ ...props }: richEditor) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  let modules = {
    toolbar: [
      [],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ indent: "-1" }, { indent: "+1" }],
      [],
      [],
    ],
  };

  let iStyle = {
    border: "none",
  };

  return (
    <div className={`${styles.wrapper} pc`} style={{ ...iStyle }}>
      <ReactQuill
        theme="snow"
        modules={modules}
        placeholder={props.placeholder}
        value={`${props.value}`}
        onChange={props.disabled ? () => {} : (val) => props.onChange(val)}
      />
    </div>
  );
};

interface richEditor {
  value?: string | number | undefined;
  onChange: any;
  myRef?: any;
  placeholder?: string;

  active?: boolean;
  disabled?: boolean;
}
