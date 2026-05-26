import React, { useMemo, useState } from 'react';
import { View, FlatList, StyleSheet, Text, RefreshControl, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import AudiobookCard from '@/src/components/AudiobookCard';
import AdBanner from '@/src/components/AdBanner';
import { useAudiobooks } from '@/src/hooks/useAudiobooks';
import { useFavorites } from '@/src/hooks/useFavorites';

export default function FavoritesScreen() {
  const { audiobooks, loading: audiobooksLoading, refresh } = useAudiobooks();
  const { favorites, isFavorite, toggleFavorite, loading } = useFavorites();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refresh();
    setRefreshing(false);
  };

  const favoriteAudiobooks = useMemo(() => {
    return audiobooks.filter((book) => favorites.includes(book.id));
  }, [favorites, audiobooks]);

  if ((loading || audiobooksLoading) && !refreshing) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4a90e2" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favorites</Text>
        <Text style={styles.headerSubtitle}>
          {favoriteAudiobooks.length} {favoriteAudiobooks.length === 1 ? 'audiobook' : 'audiobooks'} saved
        </Text>
      </View>

      <FlatList
        data={favoriteAudiobooks}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={favoriteAudiobooks.length > 0 ? styles.row : undefined}
        renderItem={({ item }) => (
          <AudiobookCard
            audiobook={item}
            isFavorite={isFavorite(item.id)}
            onToggleFavorite={toggleFavorite}
          />
        )}
        contentContainerStyle={styles.listContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#4a90e2"
            colors={['#4a90e2']}
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="heart-outline" size={64} color="#333" />
            <Text style={styles.emptyText}>No favorites yet</Text>
            <Text style={styles.emptySubtext}>Tap the heart icon on audiobooks to save them here</Text>
          </View>
        }
      />

      <AdBanner />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#999',
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  listContent: {
    paddingTop: 8,
    paddingBottom: 16,
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#999',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
    paddingHorizontal: 32,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#666',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});
