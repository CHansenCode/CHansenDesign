export const H5 = ({ ...props }: Props) => {
  return (
    <>
      <h5 {...props}>{props.text}</h5>

      <style jsx>
        {`
          h5 {
            font-weight: 500;
            font-size: 0.8rem;
          }
        `}
      </style>
    </>
  );
};

type Props = {
  text: string;
  bold?: boolean;
};
