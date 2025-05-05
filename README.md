# Vanilla PostBoard

A modern, lightweight post board application built with vanilla JavaScript and Web Components.
 This project demonstrates advanced frontend techniques without relying on any frameworks.

## Features

### Core Features
- Display top 5 posts sorted by likes
- Show post details and comments

### Advanced Features

#### Web Components
- Custom elements for Posts (`<post-card>`)
- Custom elements for Comments (`<post-comment>`)
- Shadow DOM for style encapsulation
- Slots for flexible content composition

#### API Client with Advanced Features
- **Request Throttling**
- **Request Timeout**
- **Caching System**: 
  - Supports both memory and localStorage caching
  - Configurable cache expiration
  - Cache invalidation on demand
- **Request Deduplication**: Prevents duplicate requests for the same resource
- **Queue Management**: Efficient handling of multiple requests

#### Performance Optimizations
- Parallel data fetching for posts and comments
- Efficient DOM updates
- Memory leak prevention
- Resource cleanup

## Project Structure

```
vanilla-postboard/
├── UI/
│   ├── post/
│   │   └── PostCard.js       # Post component
│   ├── comments/
│   │   └── Comment.js        # Comment component
│            
├── api/
│   └── apiClient.js          # Advanced API client
├── constants/
│   ├── config.js            # Configuration settings
│   └── endpoints.js         # API endpoints
├── services/
│   └── uiRender.js       # UI rendering logic
└── main.js                  # Application entry point
```

## Getting Started

1. Clone the repository
2. Open `index.html` in a modern browser
3. No build step required - it's pure vanilla JavaScript!

## Configuration

The application can be configured through `constants/config.js`:

```javascript
export const config = {
    CACHE_MODE: 'memory',     // 'memory' or 'localstorage'
    MAX_CONCURRENT_REQUESTS: 3,
    API_TIMEOUT: 4000,        // 4 seconds
    CACHE_EXPIRY: 5 * 60 * 1000, // 5 minutes
    ENABLE_CACHING: true,
    ENABLE_LOGGING: false
};
```

## Best Practices Implemented

1. **Error Handling**
   - Comprehensive error catching
   - User-friendly error messages
   - Graceful fallbacks

2. **Performance**
   - Efficient DOM manipulation
   - Request optimization
   - Resource management

3. **Code Organization**
   - Modular architecture
   - Clear separation of concerns
   - Maintainable structure

4. **Security**
   - Input sanitization
   - Safe DOM updates
   - XSS prevention through Web Components


## Future Improvements

- Add unit tests
- Implement infinite scroll
- Add offline support
- Implement real-time updates
- Add user authentication
- Implement post creation/editing

## Contributing

Feel free to submit issues and enhancement requests! 