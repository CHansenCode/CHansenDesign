export const Main = ({ children, loggedIn, ...props }: Props) => {
  return (
    <>
      <main className="pc3b">{children}</main>

      <style jsx>
        {`
          main {
            position: relative;

            width: 100vw;
            max-width: 1200px;

            min-height: 100vh;

            padding-left: 12rem;

            margin: 0 auto;

            overflow-x: hidden;
          }
        `}
      </style>
    </>
  );
};

type Props = {
  loggedIn: any;
  children: React.ReactNode;
};
