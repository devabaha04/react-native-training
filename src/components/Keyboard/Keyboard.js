import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { keys } from '../../constant';

export default function Keyboard() {
  const renderKeyboardRow = (row, index) => (
    <View style={styles.keyboardRow} key={index}>
      {row.map((item, index) => renderKeyboard(item, index))}
    </View>
  );

  const renderKeyboard = (key, index) => (
    <TouchableOpacity key={index} style={styles.keyBtn}>
      <Text style={styles.keyText}>{key}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {keys.map((item, index) => renderKeyboardRow(item, index))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 14,
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 14,
  },
  keyBtn: {
    backgroundColor: '#d7dadc',
    padding: 11,
    margin: 4,
    borderRadius: 4,
  },
  keyText: {
    color: '#121214',
    fontSize: 15,
    fontWeight: '500',
  },
});
