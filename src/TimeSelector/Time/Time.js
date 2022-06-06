import React, {useMemo, memo} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

function Time({time, handleSelectedTime, itemActive, passedTime}) {
  const styleStatus = useMemo(() => {
    if (passedTime.includes(time)) {
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

  return (
    <TouchableOpacity
      disabled={passedTime.includes(time)}
      style={[
        styles.container,
        {
          backgroundColor:
            itemActive === time ? '#2C7AFF' : styleStatus.backgroundColor,
        },
      ]}
      onPress={handleSelectedTime}>
      <Text
        style={[
          styles.content,
          {
            color: itemActive === time ? '#fff' : styleStatus.color,
          },
        ]}>
        {time}
      </Text>
    </TouchableOpacity>
  );
}

export default memo(Time);

const styles = StyleSheet.create({
  container: {
    borderRadius: 14,
    width: 90,
    height: 42,
    paddingVertical: 8,
    marginVertical: 8,
    marginHorizontal: 4,
    backgroundColor: '#fff',
  },
  content: {
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
  },
});
