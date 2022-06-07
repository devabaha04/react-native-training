import React, {memo, useCallback} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {getTimeData, getPassedTime} from '../helper/getTime';
import Time from './Time';

function TimeSelector({
  isHorizontal,
  col,
  onChangeLayout,
  onSelectedTime,
  indexActive,
  timeSelected,
}) {
  const numCol = !isHorizontal && col;

  const checkPassedTime = useCallback((time) => {
    return getPassedTime().includes(time)
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <Time
        key={index}
        time={item}
        onSelectedTime={() => onSelectedTime(item, index)}
        itemActive={index === indexActive ? item : ''}
        isDisable={checkPassedTime(item)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.label}>Select Time: </Text>
        <Text style={styles.timeSelected}> {timeSelected} </Text>
        <TouchableOpacity style={styles.layoutBtn} onPress={onChangeLayout}>
          {isHorizontal ? (
            <Icon name="grip-horizontal" style={styles.iconLayoutBtn} />
          ) : (
            <Icon name="grip-vertical" style={styles.iconLayoutBtn} />
          )}
        </TouchableOpacity>
      </View>

      <View style={[styles.listTimeContainer]}>
        <FlatList
          key={numCol}
          horizontal={isHorizontal}
          data={getTimeData()}
          keyExtractor={(index) => index.toString()}
          renderItem={renderItem}
          numColumns={numCol}
          contentContainerStyle={isHorizontal && styles.flatListCustom}
        />
      </View>
    </View>
  );
}

export default memo(TimeSelector);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 12,
  },
  headerContainer: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#333',
    fontSize: 16,
  },
  timeSelected: {
    color: '#333',
    fontSize: 16,
    fontWeight: '700',
    paddingHorizontal: 8,
  },
  layoutBtn: {
    flex: 2,
    alignItems: 'flex-end',
  },
  iconLayoutBtn: {
    fontSize: 26,
    color: '#333',
  },
  listTimeContainer: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 6,
    marginHorizontal: 8,
  },
  flatListCustom: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});
