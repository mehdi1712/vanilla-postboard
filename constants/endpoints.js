// Constants for API endpoints and base URL

export const API_BASE = "https://dummyjson.com";

export const ENDPOINTS = {
  POSTS: `${API_BASE}/posts`,
  POST_DETAILS: (id) => `${API_BASE}/posts/${id}`,
  POST_COMMENTS: (id) => `${API_BASE}/comments/post/${id}`,
};
