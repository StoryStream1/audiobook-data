import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Audiobook } from '@/src/data/audiobooks';

interface AudiobookCardProps {
  audiobook: Audiobook;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export default function AudiobookCard({ audiobook, isFavorite, onToggleFavorite }: AudiobookCardProps) {
  const handlePress = () => {
    router.push(`/audiobook/${audiobook.id}`);
  };

  return (
    <TouchableOpacity 
      style={styles.card}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.coverContainer}>
        <Image
          source={{ uri: audiobook.coverImage }}
          style={styles.coverImage}
          resizeMode="cover"
        />
        
        <TouchableOpacity
          style={styles.favoriteButton}
          onPress={(e) => {
            e.stopPropagation();
            onToggleFavorite(audiobook.id);
          }}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={22}
            color={isFavorite ? '#ff4757' : '#fff'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {audiobook.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '47%',
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
  },
  coverContainer: {
    width: '100%',
    aspectRatio: 0.67,
    position: 'relative',
    backgroundColor: '#2a2a2a',
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 20,
    padding: 6,
    zIndex: 2,
  },
  titleContainer: {
    padding: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
    lineHeight: 18,
  },
});
