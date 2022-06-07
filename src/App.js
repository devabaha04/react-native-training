import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import Guess from './components/Guess';
import Keyboard from './components/Keyboard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Wordle</Text>
      </View>
      <View style={styles.guessContainer} >
        <Guess />
      </View>
      <Keyboard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: '700',
    color: '#333',
    textAlign: 'center',
  },
  guessContainer: {
    flex: 2
  }
});
