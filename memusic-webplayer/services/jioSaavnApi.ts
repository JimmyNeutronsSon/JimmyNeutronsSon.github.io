import {
  SearchSongsResponse,
  SearchAlbumsResponse,
  SearchArtistsResponse,
  SearchPlaylistsResponse,
  SongSuggestionsResponse,
  GetAlbumDetailsResponse,
  GetArtistDetailsResponse,
  GetSongsResponse,
  GetLyricsResponse,
} from "../types";

const JIOSAAVN_API_FALLBACKS = [
  "https://lowkey-backend.vercel.app",
  "https://jiosaavn-api-privatecvc2.vercel.app",
  "https://jio-saavan-api.vercel.app",
  "https://jiosaavn-apix.arcadopredator.workers.dev",
];

let currentApiIndex = 0;
const getApiBaseUrl = () => JIOSAAVN_API_FALLBACKS[currentApiIndex];
const nextApiBaseUrl = () => {
  currentApiIndex = (currentApiIndex + 1) % JIOSAAVN_API_FALLBACKS.length;
};

const CACHE_LIMIT = 100;
const cache = new Map<string, any>();

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchWithRetry = async (
  endpoint: string,
  retries = 3,
  delay = 1000,
): Promise<Response> => {
  try {
    const fullUrl = `${getApiBaseUrl()}${endpoint}`;
    const response = await fetch(wrapUrl(fullUrl));
    if (!response.ok && (response.status >= 500 || response.status === 429)) {
      throw new Error(`Server/Network Error: ${response.status}`);
    }
    return response;
  } catch (error) {
    if (retries === 0) throw error;
    await wait(delay);
    nextApiBaseUrl(); // Switch to backup API on failure
    return fetchWithRetry(endpoint, retries - 1, delay * 2);
  }
};

export const wrapUrl = (url: string) => {
  if (!url || typeof url !== "string") return url || "";
  if (url.includes("/proxy?url=")) return url;
  let proxyBase = "/proxy";
  if (window.location.port === "5500") {
    proxyBase = "http://localhost:8080/proxy";
  }
  return proxyBase + "?url=" + encodeURIComponent(url);
};

const traverseAndWrapUrls = (obj: any): any => {
  if (typeof obj === "string") {
    if (
      (obj.startsWith("http://") || obj.startsWith("https://")) &&
      (obj.includes("saavncdn") ||
        obj.includes("saavn.com") ||
        obj.includes("jiosaavn"))
    ) {
      return wrapUrl(obj);
    }
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(traverseAndWrapUrls);
  }
  if (obj !== null && typeof obj === "object") {
    const newObj: any = {};
    for (const key in obj) {
      newObj[key] = traverseAndWrapUrls(obj[key]);
    }
    return newObj;
  }
  return obj;
};

const apiRequest = async <T>(
  endpoint: string,
  cacheKey?: string,
): Promise<T> => {
  if (cacheKey && cache.has(cacheKey)) {
    const cachedData = cache.get(cacheKey);
    cache.delete(cacheKey);
    cache.set(cacheKey, cachedData);
    return Promise.resolve(cachedData as T);
  }

  try {
    const response = await fetchWithRetry(endpoint);
    if (!response.ok)
      throw new Error(`API request failed with status ${response.status}`);

    const rawData = await response.json();
    const data = traverseAndWrapUrls(rawData) as T;

    if (cacheKey) {
      if (cache.size >= CACHE_LIMIT) {
        const firstKey = cache.keys().next().value;
        if (firstKey) cache.delete(firstKey);
      }
      cache.set(cacheKey, data);
    }
    return data;
  } catch (error) {
    throw error;
  }
};

export const searchSongs = (
  query: string,
  page: number = 1,
  limit: number = 20,
) =>
  apiRequest<SearchSongsResponse>(
    `/api/search/songs?query=${encodeURIComponent(query)}&page=${page}&limit=${limit}`,
  );
export const getSongsByIds = (ids: string[]) =>
  apiRequest<GetSongsResponse>(`/api/songs?ids=${ids.join(",")}`);
export const searchAlbums = (
  query: string,
  page: number = 1,
  limit: number = 20,
) =>
  apiRequest<SearchAlbumsResponse>(
    `/api/search/albums?query=${encodeURIComponent(query)}&page=${page}&limit=${limit}`,
  );
export const getAlbumDetails = (albumId: string) =>
  apiRequest<GetAlbumDetailsResponse>(
    `/api/albums?id=${albumId}`,
    `album-${albumId}`,
  );
export const getArtistDetails = (artistId: string) =>
  apiRequest<GetArtistDetailsResponse>(
    `/api/artists?id=${artistId}`,
    `artist-${artistId}`,
  );
export const searchArtists = (
  query: string,
  page: number = 1,
  limit: number = 20,
) =>
  apiRequest<SearchArtistsResponse>(
    `/api/search/artists?query=${encodeURIComponent(query)}&page=${page}&limit=${limit}`,
  );
export const searchPlaylists = (
  query: string,
  page: number = 1,
  limit: number = 20,
) =>
  apiRequest<SearchPlaylistsResponse>(
    `/api/search/playlists?query=${encodeURIComponent(query)}&page=${page}&limit=${limit}`,
  );
export const getSongSuggestions = (songId: string, limit: number = 10) =>
  apiRequest<SongSuggestionsResponse>(
    `/api/songs/${songId}/suggestions?limit=${limit}`,
  );
export const getLyrics = (songId: string) =>
  apiRequest<GetLyricsResponse>(
    `/api/songs/${songId}/lyrics`,
    `lyrics-${songId}`,
  );
