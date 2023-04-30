import React from "react";

export const Form = ({ ...props }: Props) => {
  const {} = props;

  function onSubmit(e: React.SyntheticEvent<EventTarget>) {
    e.preventDefault();
    props.onSubmit(e);
  }

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)}>{props.children}</form>

      <style jsx>
        {`
          form {
            width: 100%;

            display: flex;
            flex-direction: column;
            gap: ${props.gap ? props.gap : "1rem"};
          }
        `}
      </style>
    </>
  );
};

type Props = {
  onSubmit?: any;
  children?: React.ReactNode;

  className?: string;
  gap?: string;
};
