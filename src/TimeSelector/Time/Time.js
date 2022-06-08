import React, {useMemo, memo} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

function Time({time, onSelectedTime, isDisable, isActive}) {
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
  }, [isDisable]);

  const styleItemBtn = useMemo(
    () => ({
      backgroundColor: isActive ? '#2C7AFF' : styleStatus.backgroundColor,
    }),
    [isActive, styleStatus],
  );

  const styleTextBtn = useMemo(
    () => ({
      color: isActive ? '#fff' : styleStatus.color,
    }),
    [isActive, styleStatus],
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

const areEquals = (prevProps, nextProps) => {
  return (
    prevProps.time === nextProps.time &&
    prevProps.isDisable === nextProps.isDisable &&
    prevProps.isActive === nextProps.isActive
  );
};

export default memo(Time, areEquals);

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
    alignItems: 'center',
  },
  content: {
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
  },
});
