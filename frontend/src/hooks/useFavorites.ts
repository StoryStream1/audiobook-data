import { useState, useEffect, useCallback } from 'react';
import storage from '@/src/utils/storage';

const FAVORITES_KEY = 'audiobook_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // Load favorites from storage
  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const stored = await storage.getItem(FAVORITES_KEY);
      if (stored) {
        setFavorites(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Failed to load favorites:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = useCallback(async (id: string) => {
    setFavorites((prev) => {
      const newFavorites = prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id];
      
      // Save to storage
      storage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites)).catch((error) => {
        console.error('Failed to save favorites:', error);
      });
      
      return newFavorites;
    });
  }, []);

  const isFavorite = useCallback(
    (id: string) => favorites.includes(id),
    [favorites]
  );

  return {
    favorites,
    loading,
    toggleFavorite,
    isFavorite,
  };
}
