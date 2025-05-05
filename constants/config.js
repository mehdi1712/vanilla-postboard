// General and dynamic configuration for the project

export const config = {
    CACHE_MODE: 'memory', // 'memory' or 'localstorage'
    THEME: "light", // for future use
    MAX_CONCURRENT_REQUESTS:3,
    API_TIMEOUT: 4000,
    CACHE_EXPIRY: 5 * 60 * 1000, // 5 minutes in milliseconds
    enableCaching: true,
    enableLogging: false
  };