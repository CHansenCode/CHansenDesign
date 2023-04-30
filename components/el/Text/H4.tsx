export const H4 = ({ ...props }: Props) => {
  return (
    <>
      <h4 {...props}>{props.text}</h4>

      <style jsx>
        {`
          h4 {
            font-size: 1.1rem;
          }
        `}
      </style>
    </>
  );
};

type Props = {
  text: string;
};
