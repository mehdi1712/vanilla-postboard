export class PostSkeleton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                .skeleton {
                    padding: 10px;
                    background: white;
                    border-radius: 5px;
                    margin-bottom: 10px;
                }
                .skeleton-title {
                    height: 20px;
                    background: #e0e0e0;
                    border-radius: 4px;
                    margin-bottom: 10px;
                    animation: pulse 1.5s infinite;
                }
                .skeleton-body {
                    height: 60px;
                    background: #e0e0e0;
                    border-radius: 4px;
                    margin-bottom: 10px;
                    animation: pulse 1.5s infinite;
                }
                .skeleton-reactions {
                    display: flex;
                    gap: 10px;
                }
                .skeleton-reaction {
                    height: 15px;
                    width: 40px;
                    background: #e0e0e0;
                    border-radius: 4px;
                    animation: pulse 1.5s infinite;
                }
                @keyframes pulse {
                    0% { opacity: 1; }
                    50% { opacity: 0.5; }
                    100% { opacity: 1; }
                }
            </style>
            <div class="skeleton">
                <div class="skeleton-title"></div>
                <div class="skeleton-body"></div>
                <div class="skeleton-reactions">
                    <div class="skeleton-reaction"></div>
                    <div class="skeleton-reaction"></div>
                </div>
            </div>
        `;
    }
}

customElements.define("post-skeleton", PostSkeleton); 