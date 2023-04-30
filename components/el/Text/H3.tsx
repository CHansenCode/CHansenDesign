export const H3 = ({ ...props }: Props) => {
  return (
    <>
      <h3 {...props}>{props.text}</h3>

      <style jsx>
        {`
          h3 {
            font-size: 1.2rem;
          }
        `}
      </style>
    </>
  );
};

type Props = {
  text: string;
};
