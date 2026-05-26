// API service for fetching audiobooks from GitHub JSON file
// This allows updating audiobooks without rebuilding the app!

import { DATA_SOURCE_CONFIG } from '@/src/config/data-source';
import storage from '@/src/utils/storage';
import FALLBACK_DATA from '@/src/data/audiobooks-fallback.json';

const CACHE_KEY = 'audiobooks_cache';
const CACHE_TIMESTAMP_KEY = 'audiobooks_cache_timestamp';

export interface Audiobook {
  id: string;
  title: string;
  author: string;
  category: 'Motivation' | 'Business' | 'Islamic' | 'Stories' | 'Self Improvement';
  description: string;
  teraboxLink: string;
  coverImage: string;
}

async function getCachedData(): Promise<Audiobook[] | null> {
  try {
    const timestamp = await storage.getItem(CACHE_TIMESTAMP_KEY);
    const cached = await storage.getItem(CACHE_KEY);
    
    if (timestamp && cached) {
      const age = Date.now() - parseInt(timestamp);
      if (age < DATA_SOURCE_CONFIG.CACHE_DURATION) {
        return JSON.parse(cached);
      }
    }
    return null;
  } catch {
    return null;
  }
}

async function setCachedData(data: Audiobook[]): Promise<void> {
  try {
    await storage.setItem(CACHE_KEY, JSON.stringify(data));
    await storage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
  } catch {
    // Ignore cache errors
  }
}

async function getStaleCache(): Promise<Audiobook[] | null> {
  try {
    const cached = await storage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : null;
  } catch {
    return null;
  }
}

export const audiobookAPI = {
  // Fetch all audiobooks from GitHub JSON
  async getAll(forceRefresh = false): Promise<Audiobook[]> {
    // Try cache first (unless force refresh)
    if (!forceRefresh) {
      const cached = await getCachedData();
      if (cached) {
        return cached;
      }
    }

    // Check if GitHub URL is configured
    const url = DATA_SOURCE_CONFIG.GITHUB_RAW_URL;
    const isConfigured = url && !url.includes('YOUR_USERNAME');

    if (!isConfigured) {
      console.log('GitHub URL not configured, using bundled data');
      return FALLBACK_DATA as Audiobook[];
    }

    try {
      // Fetch from GitHub with cache-busting
      const response = await fetch(`${url}?t=${Date.now()}`, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      
      // Cache for next time
      await setCachedData(data);
      
      return data;
    } catch (error) {
      console.error('Error fetching from GitHub:', error);
      
      // Try stale cache first
      const staleCache = await getStaleCache();
      if (staleCache) {
        return staleCache;
      }
      
      // Fall back to bundled data if enabled
      if (DATA_SOURCE_CONFIG.USE_FALLBACK) {
        return FALLBACK_DATA as Audiobook[];
      }
      
      throw error;
    }
  },

  // Get single audiobook by ID
  async getById(id: string): Promise<Audiobook | null> {
    const allBooks = await this.getAll();
    return allBooks.find((book) => book.id === id) || null;
  },
};
