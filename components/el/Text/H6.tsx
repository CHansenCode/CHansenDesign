export const H6 = ({ ...props }: Props) => {
  return (
    <>
      <h6 {...props}>{props.text}</h6>

      <style jsx>
        {`
          h6 {
          }
        `}
      </style>
    </>
  );
};

type Props = {
  text: string;
};
