// UI/PostCard.js
export class PostCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
  
    set data(post) {
      this.shadowRoot.innerHTML = `
        <style>
          .card { padding: 10px; background: white; border-radius: 5px; margin-bottom: 10px; }
          .title { font-weight: bold; margin-bottom: 5px; font-size: 16px; }
          .body { margin-bottom: 10px; font-size: 12px; }
          .reactions { display: flex; gap: 10px; }
          .reaction { font-size: 12px; }
          .tags { display: flex; gap: 4px; margin-top: 10px; }
          .tag { font-size: 11px; }
        </style>
        <div class="card">
          <div class="title">${post.title}</div>
          <div class="body">${post.body}</div>
          <div class="reactions">
          <span class="reaction">👍 ${post.reactions.likes}</span>
          <span class="reaction">👎 ${post.reactions.dislikes}</span>      
          </div>
          <div class="tags">
            ${Array.isArray(post.tags) ? post.tags.map(tag => `<span class="tag">#${tag}</span>`).join('') : `<span class="tag">#${post.tags}</span>`}
          </div>
          <slot></slot> <!-- for comments -->
        </div>
      `;
    }
  }
  
  customElements.define("post-card", PostCard);


  
  