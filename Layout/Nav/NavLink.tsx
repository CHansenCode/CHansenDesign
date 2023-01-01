export const NavLink = ({ ...props }) => {
  props = {
    ...props,
  };

  return (
    <>
      <button className="pc1b">{props.text}</button>

      <style jsx>
        {`
          div {
            height: 3rem;
          }
        `}
      </style>
    </>
  );
};
