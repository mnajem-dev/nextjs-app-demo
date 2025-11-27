"use client";

export default function PostError({ error, reset }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Unable to load this post</h1>
      <p>{error?.message || "Please try again."}</p>
      <button
        onClick={() => reset?.()}
        style={{ marginTop: "12px", padding: "6px 12px" }}
      >
        Try again
      </button>
    </div>
  );
}
