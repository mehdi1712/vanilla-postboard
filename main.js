import { renderPostWithComments } from "./services/uiRender.js";
import { fetchData } from "./api/apiClient.js";
import { ENDPOINTS } from "./constants/endpoints.js"
import { clearCache } from "./api/apiClient.js";
import { PostSkeleton } from "./UI/skeleton/PostSkeleton.js";

function showSkeletons() {
    const app = document.getElementById("app");
    app.innerHTML = '';
    // Add 5 skeleton posts
    for (let i = 0; i < 5; i++) {
        const skeleton = new PostSkeleton();
        app.appendChild(skeleton);
    }
}

// Fetch and render posts
async function init() {
    try {
        // Show skeletons while loading
        showSkeletons();
        
        const allPosts = await fetchData(ENDPOINTS.POSTS);
        const top5Posts = getTop5Posts(allPosts.posts);
        
        // Clear skeletons
        document.getElementById("app").innerHTML = '';
        
        // Process each popular post
        for (const post of top5Posts) {
            try {
                // Fetch detailed post information
                const postDetails = await fetchData(ENDPOINTS.POST_DETAILS(post.id));
                
                // Fetch comments for the post
                const comments = await fetchData(ENDPOINTS.POST_COMMENTS(post.id));
                
                // Render the post with its comments
                renderPostWithComments(postDetails, comments.comments);
            } catch (error) {
                console.error(`Failed to fetch details for post ${post.id}:`, error);
            }
        }
    } catch (error) {
        console.error('Failed to fetch posts:', error);
    }
}

// Helper function to get top 5 posts (you can modify the sorting criteria)
function getTop5Posts(posts) {
    return posts
        .sort((a, b) => b.reactions.likes - a.reactions.likes) // Sort by Likes (or any other metric)
        .slice(0, 5);
}

// Initialize the application
init();

// Clear cache
document.getElementById('clearCache').addEventListener('click', () => {
    clearCache();
});

// Refetch  
document.getElementById('refetch').addEventListener('click', () => {
    init();
});

