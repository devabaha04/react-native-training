import React, {useEffect, useState, useMemo, memo} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

function Time({time, index, handleSelectedTime}) {

  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => handleSelectedTime(time, index)}>
      <Text style={styles.content}> {time} </Text>
    </TouchableOpacity>
  );
}

export default Time

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    width: 90,
    height: 42,
    paddingVertical: 8,
    marginVertical: 8,
    marginHorizontal: 4,
    backgroundColor: '#fff'
  },
  content: {
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
  },
});
