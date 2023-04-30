export const H1 = ({ ...props }: Props) => {
  return (
    <>
      <h1 {...props}>{props.text}</h1>

      <style jsx>
        {`
          h1 {
            font-size: 2.5rem;
            margin: ${props.margin};
          }
        `}
      </style>
    </>
  );
};

type Props = {
  text: string;
  margin?: string;
};
