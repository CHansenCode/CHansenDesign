import { Text } from "../../../";

export const Item = () => {
  return (
    <>
      <section className="pc1b">
        <header>
          <p>cow</p>
        </header>

        <main></main>

        <footer>
          <Text type="label" text="placeholder" />

          <Text type="label" text="cow" />
        </footer>
      </section>

      <style jsx>
        {`
          section {
            height: 8rem;
            width: 8rem;

            padding: 0.5rem;

            box-shadow: 0 0 1rem -0.65rem currentColor;

            display: grid;
            grid-template-rows: auto 1fr auto;

            overflow: hidden;
          }

          footer {
            display: grid;
            grid-template: 1fr 1fr;
          }
        `}
      </style>
    </>
  );
};
