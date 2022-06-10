import React from 'react';
import {View, StyleSheet} from 'react-native';
import Block from './Block';

export default function GuessRow({ row, indexRow }) {
  const renderBlock = (item, index) => {
    return <Block key={index} letter={item.value} />;
  };

  return (
    <View style={styles.guessRow}>
      {row.map((item, index) => renderBlock(item, index))}
    </View>
  );
}

const styles = StyleSheet.create({
  guessRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
