// utils/fetchGitHubData.ts
export async function fetchGitHubData(filePath: string) {
  const response = await fetch(`https://raw.githubusercontent.com/Shyam20001/shyam-portfolio/main/${filePath}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

/**
 * // utils/fetchGitHubData.ts
const CACHE_EXPIRY_MS = 1000 * 60 * 60; // 1 hour

export async function fetchGitHubData(filePath: string) {
  const cacheKey = `github-data-${filePath}`;
  const timestampKey = `${cacheKey}-timestamp`;

  const cachedData = localStorage.getItem(cacheKey);
  const cachedTimestamp = localStorage.getItem(timestampKey);
  
  const now = Date.now();
  const isExpired = cachedTimestamp && now - parseInt(cachedTimestamp) > CACHE_EXPIRY_MS;

  if (cachedData && !isExpired) {
    return JSON.parse(cachedData);
  }

  const response = await fetch(`https://raw.githubusercontent.com/Shyam20001/shyam-portfolio/main/${filePath}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  localStorage.setItem(cacheKey, JSON.stringify(data));
  localStorage.setItem(timestampKey, now.toString());
  return data;
}

 */