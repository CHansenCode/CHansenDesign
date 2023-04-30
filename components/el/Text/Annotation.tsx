export const Annotation = ({ ...props }: Props) => {
  return (
    <>
      <h6 {...props}>{props.text}</h6>

      <style jsx>
        {`
          h6 {
            font-weight: 300;
            font-size: 0.65rem;
            letter-spacing: 0.1px;
            font-style: italic;
          }
        `}
      </style>
    </>
  );
};

type Props = {
  text: string;
};
