export const Main = ({ children, loggedIn, ...props }: Props) => {
  return (
    <>
      <main>{children}</main>

      <style jsx>
        {`
          main {
            position: relative;

            width: calc(100vw - 10rem);

            min-height: 100vh;

            margin-left: 10rem;

            overflow-x: hidden;

            transition: 0.2s ease;
          }
        `}
      </style>
    </>
  );
};

type Props = {
  loggedIn: boolean;
  children: React.ReactNode;
};
