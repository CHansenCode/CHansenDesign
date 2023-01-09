import Link from "next/link";
import { Button } from "../../components";

export default function SlidesEditor() {
  return (
    <>
      <section>
        <div>
          <h4>This page could not be found</h4>

          <Link href="/">
            <Button text="BACK TO HOMEPAGE" />
          </Link>
        </div>
      </section>

      <style jsx>{`
        section {
          height: 100%;
          width: 100%;
          min-height: 80vh;

          display: flex;
          align-items: center;
          justify-content: center;
        }
        div {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
      `}</style>
    </>
  );
}
