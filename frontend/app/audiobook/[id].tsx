import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { AUDIOBOOKS } from '@/src/data/audiobooks';
import { useFavorites } from '@/src/hooks/useFavorites';

export default function AudiobookDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const audiobook = AUDIOBOOKS.find((book) => book.id === id);

  if (!audiobook) {
    return (
      <SafeAreaView style={styles.container} edges={['top']}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Audiobook not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const handleOpenLink = async () => {
    try {
      const canOpen = await Linking.canOpenURL(audiobook.teraboxLink);
      if (canOpen) {
        await Linking.openURL(audiobook.teraboxLink);
      } else {
        Alert.alert('Error', 'Unable to open TeraBox link');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to open link');
    }
  };

  const favorite = isFavorite(audiobook.id);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView>
        {/* Header with back button and favorite */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toggleFavorite(audiobook.id)}
            style={styles.headerFavorite}
          >
            <Ionicons
              name={favorite ? 'heart' : 'heart-outline'}
              size={28}
              color={favorite ? '#ff4757' : '#fff'}
            />
          </TouchableOpacity>
        </View>

        {/* Cover Image */}
        <View style={styles.coverLarge}>
          <Image
            source={{ uri: audiobook.coverImage }}
            style={styles.coverImage}
            resizeMode="cover"
          />
        </View>

        {/* Book Info */}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{audiobook.title}</Text>
          <Text style={styles.author}>by {audiobook.author}</Text>
          
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{audiobook.category}</Text>
          </View>

          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionLabel}>About this audiobook</Text>
            <Text style={styles.description}>{audiobook.description}</Text>
          </View>

          {/* Open TeraBox Button */}
          <TouchableOpacity style={styles.openButton} onPress={handleOpenLink}>
            <Ionicons name="open-outline" size={24} color="#fff" />
            <Text style={styles.openButtonText}>Open in TeraBox</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 20,
    padding: 8,
  },
  headerFavorite: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 20,
    padding: 8,
  },
  coverLarge: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: '#2a2a2a',
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
    lineHeight: 34,
  },
  author: {
    fontSize: 18,
    color: '#999',
    marginBottom: 16,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#2a4a7c',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    marginBottom: 24,
  },
  categoryText: {
    fontSize: 14,
    color: '#6ba3ff',
    fontWeight: '600',
  },
  descriptionContainer: {
    marginBottom: 32,
  },
  descriptionLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#ccc',
    lineHeight: 24,
  },
  openButton: {
    backgroundColor: '#4a90e2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    gap: 12,
  },
  openButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: '#666',
  },
});
