const BASE_URL =
  process.env.API_BASE_URL || "https://jsonplaceholder.typicode.com";

export async function fetchPosts() {
  const response = await fetch(`${BASE_URL}/posts`, {
    next: { revalidate: 120 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export async function fetchPostById(id) {
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
    next: { revalidate: 120 },
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }

  return response.json();
}
