import React, {memo, useMemo} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Time from './Time';
import {getHorizontalData} from '../helper/getTime';

function TimeSelector({
  isHorizontal,
  col,
  onChangeLayout,
  onSelectedTime,
  timeData,
  timeSelected,
}) {
  const numCol = !isHorizontal && col;

  const timeList = useMemo(() => {
    const result = [];
    let blockTimes = [];
    if (isHorizontal) {
      return getHorizontalData(timeData, col);
    } else {
      timeData.forEach((time, index) => {
        blockTimes.push(time);
        if ((index + 1) % 12 === 0 || index === timeData.length - 1) {
          result.push(blockTimes);
          blockTimes = [];
        }
      });
    }
    return result;
  }, [isHorizontal, timeData, col, getHorizontalData]);

  const renderItem = ({item, indexRow}) => {
    return (
      <View
        style={
          isHorizontal
            ? {flex: 1}
            : {flexDirection: 'column', flex: 1, justifyContent: 'center'}
        }>
        {item.map((block, indexCol) => {
          return (
            <Time
              key={indexCol}
              time={block.time}
              onSelectedTime={() => onSelectedTime(block)}
              isActive={block.status === 2}
              isDisable={block.status === 0}
            />
          );
        })}
      </View>
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
          data={timeList}
          keyExtractor={(item, index) => index}
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
    flexDirection: 'row',
  },
});
