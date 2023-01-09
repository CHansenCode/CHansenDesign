import Link from "next/link";

export default function SlidesEditor() {
  return (
    <>
      <section>
        <div>
          <h4>Slides editor</h4>
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
