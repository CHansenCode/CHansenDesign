export const H2 = ({ ...props }: Props) => {
  return (
    <>
      <h2 {...props}>{props.text}</h2>

      <style jsx>
        {`
          h2 {
            font-size: 1.5rem;
          }
        `}
      </style>
    </>
  );
};

type Props = {
  text: string;
};
