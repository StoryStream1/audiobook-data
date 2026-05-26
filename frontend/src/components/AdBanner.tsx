import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Placeholder for Google AdMob banner ad
// When ready to integrate, install: expo install expo-ads-admob
// Then replace this component with actual AdMob banner

export default function AdBanner() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ad Space (Google AdMob)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#0a0a0a',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#2a2a2a',
  },
  text: {
    color: '#666',
    fontSize: 12,
  },
});
