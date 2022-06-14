import React from 'react';
import {View, StyleSheet} from 'react-native';
import Block from './Block';

function GuessRow({row}) {
  const renderBlock = (item, index) => {
    return <Block key={index} letter={item.value} status={item.status} />;
  };

  return (
    <View style={styles.guessRow}>
      {row.map((item, index) => renderBlock(item, index))}
    </View>
  );
}

export default GuessRow;

const styles = StyleSheet.create({
  guessRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
