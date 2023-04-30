export const Label = ({ ...props }: Props) => {
  return (
    <>
      <h6 {...props}>{props.text}</h6>

      <style jsx>
        {`
          h6 {
            font-weight: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            margin: ${props.margin};
          }
        `}
      </style>
    </>
  );
};

type Props = {
  text: string;
  bold?: boolean;
  margin?: string;
};
