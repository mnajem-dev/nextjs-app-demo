"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div style={{ padding: "20px" }}>
          <h1>Something went wrong</h1>
          <p>{error?.message || "An unexpected error occurred."}</p>
          <button
            onClick={() => reset?.()}
            style={{ marginTop: "12px", padding: "6px 12px" }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
