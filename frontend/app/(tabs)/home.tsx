import React, { useState, useMemo } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '@/src/components/SearchBar';
import AudiobookCard from '@/src/components/AudiobookCard';
import AdBanner from '@/src/components/AdBanner';
import { AUDIOBOOKS } from '@/src/data/audiobooks';
import { useFavorites } from '@/src/hooks/useFavorites';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const { isFavorite, toggleFavorite } = useFavorites();

  const filteredAudiobooks = useMemo(() => {
    if (!searchQuery.trim()) {
      return AUDIOBOOKS;
    }

    const query = searchQuery.toLowerCase();
    return AUDIOBOOKS.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>AudioBook Box</Text>
        <Text style={styles.headerSubtitle}>{AUDIOBOOKS.length} audiobooks available</Text>
      </View>
      
      <SearchBar
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search by title, author, or category..."
      />

      <FlatList
        data={filteredAudiobooks}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <AudiobookCard
            audiobook={item}
            isFavorite={isFavorite(item.id)}
            onToggleFavorite={toggleFavorite}
          />
        )}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No audiobooks found</Text>
            <Text style={styles.emptySubtext}>Try a different search term</Text>
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
    paddingBottom: 4,
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
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#555',
  },
});
