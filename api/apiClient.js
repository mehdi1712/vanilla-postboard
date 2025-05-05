// API client for handling API requests with caching and timeout

import { config} from "../constants/config.js";

const { API_TIMEOUT, MAX_CONCURRENT_REQUESTS, CACHE_EXPIRY } = config;
const cache = new Map();
let activeRequests = 0;
const queue = [];
const pendingRequests = new Map(); // Track in-flight requests to prevent duplicates

function fetchWithTimeout(url, timeout = API_TIMEOUT) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`Request timed out after ${timeout}ms`));
    }, timeout);

    fetch(url)
      .then((res) => {
        clearTimeout(timer);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(resolve)
      .catch((error) => {
        clearTimeout(timer);
        reject(error);
      });
  });
}

function processQueue() {
  if (queue.length === 0 || activeRequests >= MAX_CONCURRENT_REQUESTS) return;

  const { url, resolve, reject } = queue.shift();
  activeRequests++;

  fetchWithTimeout(url)
    .then((data) => {
      if (config.enableCaching) {
        cache.set(url, {
          data,
          timestamp: Date.now()
        });
      }
      if (config.enableLogging) console.log("Fetched:", url);
      resolve(data);
    })
    .catch((error) => {
      if (config.enableLogging) console.error("Error fetching:", url, error);
      reject(error);
    })
    .finally(() => {
      activeRequests--;
      pendingRequests.delete(url);
      processQueue();
    });
}

function isCacheValid(cacheEntry) {
  if (!cacheEntry) return false;
  return Date.now() - cacheEntry.timestamp < CACHE_EXPIRY;
}

export function fetchData(url) {
  // Check if there's a valid cached response
  if (config.enableCaching) {
    const cachedData = cache.get(url);
    if (cachedData && isCacheValid(cachedData)) {
      if (config.enableLogging) console.log("Cache hit:", url);
      return Promise.resolve(cachedData.data);
    }
  }

  // Check if there's already a pending request for this URL
  if (pendingRequests.has(url)) {
    if (config.enableLogging) console.log("Deduplicating request:", url);
    return pendingRequests.get(url);
  }

  // Create new request
  const requestPromise = new Promise((resolve, reject) => {
    queue.push({ url, resolve, reject });
    processQueue();
  });

  // Store the promise to prevent duplicate requests
  pendingRequests.set(url, requestPromise);
  return requestPromise;
}

// Optional: Add a method to clear the cache
export function clearCache() {
  cache.clear();
  if (config.enableLogging) console.log("Cache cleared");
}
