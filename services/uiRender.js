// UI/uiRender.js
import { PostCard } from "../UI/post/PostCard.js";
import { Comment } from "../UI/comments/Comment.js";

export function renderPostWithComments(post, comments = []) {
  const postElement = new PostCard();
  const commentElement = new Comment();

  postElement.data = post;
  commentElement.data = comments;


  postElement.appendChild(commentElement);

  document.getElementById("app").appendChild(postElement);
}
