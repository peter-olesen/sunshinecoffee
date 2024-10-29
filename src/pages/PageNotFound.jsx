import { Helmet } from "react-helmet-async";

export const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Page not found</title>
        <meta
          name="description"
          content="Siden du ledte efter kunne ikke findes."
        />
        <meta name="robots" content="noindex" />
      </Helmet>
      <main className="pageSection">
        <h2
          style={{
            fontFamily: "sans-serif",
            fontSize: "5rem",
            color: "red",
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          404
        </h2>
        <p style={{ textAlign: "center" }}>
          The page you requested could not be found
        </p>
      </main>
    </>
  );
};
