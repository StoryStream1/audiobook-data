import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AudiobookCard from '@/src/components/AudiobookCard';
import AdBanner from '@/src/components/AdBanner';
import { AUDIOBOOKS, CATEGORIES, Audiobook } from '@/src/data/audiobooks';
import { useFavorites } from '@/src/hooks/useFavorites';

export default function CategoriesScreen() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { isFavorite, toggleFavorite } = useFavorites();

  const filteredAudiobooks = selectedCategory
    ? AUDIOBOOKS.filter((book) => book.category === selectedCategory)
    : AUDIOBOOKS;

  const getCategoryCount = (category: string) => {
    return AUDIOBOOKS.filter((book) => book.category === category).length;
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Categories</Text>
        <Text style={styles.headerSubtitle}>
          {selectedCategory ? `${filteredAudiobooks.length} books in ${selectedCategory}` : 'Browse by category'}
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        <TouchableOpacity
          style={[styles.categoryChip, !selectedCategory && styles.categoryChipActive]}
          onPress={() => setSelectedCategory(null)}
        >
          <Text style={[styles.categoryChipText, !selectedCategory && styles.categoryChipTextActive]}>
            All ({AUDIOBOOKS.length})
          </Text>
        </TouchableOpacity>
        {CATEGORIES.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryChip,
              selectedCategory === category && styles.categoryChipActive,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryChipText,
                selectedCategory === category && styles.categoryChipTextActive,
              ]}
            >
              {category} ({getCategoryCount(category)})
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={filteredAudiobooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AudiobookCard
            audiobook={item}
            isFavorite={isFavorite(item.id)}
            onToggleFavorite={toggleFavorite}
          />
        )}
        contentContainerStyle={styles.listContent}
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
  categoriesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#2a2a2a',
    marginRight: 8,
  },
  categoryChipActive: {
    backgroundColor: '#4a90e2',
    borderColor: '#4a90e2',
  },
  categoryChipText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#999',
  },
  categoryChipTextActive: {
    color: '#fff',
  },
  listContent: {
    paddingBottom: 16,
  },
});
