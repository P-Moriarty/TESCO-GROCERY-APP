import { Image, StyleSheet, Platform } from 'react-native';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.titleContainer}>
    <View style={styles.titleContainer}>
    <Text>Hello</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
},
subtitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
