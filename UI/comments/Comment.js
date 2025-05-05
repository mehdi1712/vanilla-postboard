// UI/Comment.js
export class Comment extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    set data(comments) {
      this.shadowRoot.innerHTML = `
        <style>
          .container { padding: 10px; background: white; border-radius: 5px; margin-bottom: 10px; }
          .comment { margin-bottom: 8px; font-size: 11px; }
          .comment:last-child { margin-bottom: 0; }
        </style>
        <div class="container">
          ${comments.map(comment => `<p class="comment">💬 ${comment.body}</p>`).join('')}
        </div>
      `;
    }
  }
  
  customElements.define("post-comment", Comment);


  
  