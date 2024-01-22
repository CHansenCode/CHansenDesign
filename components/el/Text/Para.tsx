export const Para = ({ ...props }: Props) => {
  return (
    <>
      <p className={props.className}>{props.text}</p>

      <style jsx>
        {`
          p {
            font-size: 1rem;
            font-weight: ${props.bold ? "700" : "500"};
          }
        `}
      </style>
    </>
  );
};

type Props = {
  text: string;
  bold?: boolean;
  className?: string;
};
