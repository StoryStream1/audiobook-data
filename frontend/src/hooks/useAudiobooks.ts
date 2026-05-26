import { useState, useEffect } from 'react';
import { audiobookAPI, Audiobook } from '@/src/services/api';

export function useAudiobooks() {
  const [audiobooks, setAudiobooks] = useState<Audiobook[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAudiobooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await audiobookAPI.getAll();
      setAudiobooks(data);
    } catch (err) {
      setError('Failed to load audiobooks. Please check your connection.');
      console.error('Error loading audiobooks:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAudiobooks();
  }, []);

  const refresh = () => {
    fetchAudiobooks();
  };

  return {
    audiobooks,
    loading,
    error,
    refresh,
  };
}
