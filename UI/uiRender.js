// UI/uiRender.js
import { PostCard } from "./post/PostCard.js";
import { Comment } from "./comments/Comment.js";

export function renderPostWithComments(post, comments = []) {
  const postElement = new PostCard();
  const commentElement = new Comment();

  postElement.data = post;
  commentElement.data = comments;


  postElement.appendChild(commentElement);

  document.getElementById("app").appendChild(postElement);
}
