import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audiobook } from '@/src/data/audiobooks';

interface AudiobookCardProps {
  audiobook: Audiobook;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export default function AudiobookCard({ audiobook, isFavorite, onToggleFavorite }: AudiobookCardProps) {
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

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {audiobook.title}
          </Text>
          <TouchableOpacity
            onPress={() => onToggleFavorite(audiobook.id)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={24}
              color={isFavorite ? '#ff4757' : '#999'}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.author}>{audiobook.author}</Text>
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryText}>{audiobook.category}</Text>
        </View>
      </View>

      <Text style={styles.description} numberOfLines={3}>
        {audiobook.description}
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleOpenLink}>
        <Ionicons name="open-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Open TeraBox Link</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  header: {
    marginBottom: 12,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    flex: 1,
    marginRight: 8,
  },
  author: {
    fontSize: 14,
    color: '#999',
    marginBottom: 8,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#2a4a7c',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  categoryText: {
    fontSize: 12,
    color: '#6ba3ff',
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    color: '#ccc',
    lineHeight: 20,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4a90e2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
