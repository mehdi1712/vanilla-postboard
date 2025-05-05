// General and dynamic configuration for the project

export const config = {
    CACHE_MODE: 'memory', // 'memory' or 'localstorage'
    THEME: "light", // for future use
    MAX_CONCURRENT_REQUESTS:3,
    API_TIMEOUT: 4000,
    CACHE_EXPIRY: 1000*60*5, // 5 minutes in milliseconds
    ENABLE_CACHING: true,
    ENABLE_LOGGING: false
  };