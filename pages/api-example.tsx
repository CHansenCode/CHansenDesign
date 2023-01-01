import Layout from "../components/layout";

export default function ApiExamplePage() {
  return (
    <>
      <Layout>
        <div>
          <h1>API Example</h1>
          <p>
            The examples below show responses from the example API endpoints.
          </p>
          <p>
            <em>You must be signed in to see responses.</em>
          </p>
        </div>

        <div>
          <h2>Session</h2>
          <p>/api/examples/session</p>
          <iframe src="/api/examples/session" />
        </div>
      </Layout>

      <style jsx>
        {`
          iframe {
            color: black;
            background: transparent;
            background-color: white;

            height: min-content;
            width: 100%;
          }
        `}
      </style>
    </>
  );
}
