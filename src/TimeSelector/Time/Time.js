import React, {useMemo, memo} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

function Time({time, onSelectedTime, itemActive, isDisable}) {
  
  const styleStatus = useMemo(() => {
    if (isDisable) {
      return {
        backgroundColor: '#EAECED',
        color: '#CCCCCC',
      };
    } else {
      return {
        backgroundColor: '#fff',
        color: '#333',
      };
    }
  }, []);

  const styleItemBtn = useMemo(
    () => ({
      backgroundColor:
        itemActive === time ? '#2C7AFF' : styleStatus.backgroundColor,
    }),
    [itemActive],
  );

  const styleTextBtn = useMemo(
    () => ({
      color: itemActive === time ? '#fff' : styleStatus.color,
    }),
    [itemActive],
  );

  return (
    <TouchableOpacity
      disabled={isDisable}
      style={[styles.container, styleItemBtn]}
      onPress={onSelectedTime}>
      <Text style={[styles.content, styleTextBtn]}>{time}</Text>
    </TouchableOpacity>
  );
}

export default memo(Time);

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 6,
    marginVertical: 6,
    marginHorizontal: 4,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
  },
});
