import React, {memo} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { getTimeData, getPassedTime } from '../helper/getTime';
import Time from './Time';

function TimeSelector({
  isHorizontal,
  col,
  handleChangeLayout,
  handleSelectedTime,
  indexActive,
  timeSelected,
}) {
  const numCol = !isHorizontal && col

  const renderItem = ({item, index}) => {
    return (
      <Time
        key={index}
        time={item}
        handleSelectedTime={() => handleSelectedTime(item, index)}
        itemActive={index === indexActive ? item : ''}
        passedTime={getPassedTime()}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.label}>Select Time: </Text>
        <Text style={styles.timeSelected}> {timeSelected} </Text>
        <TouchableOpacity style={styles.layoutBtn} onPress={handleChangeLayout}>
          {isHorizontal ? (
            <Icon name="grip-horizontal" size={26} color={'#333'} />
          ) : (
            <Icon name="grip-vertical" size={26} color={'#333'} />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.listTimeContainer}>
        <FlatList
          key={numCol}
          horizontal={isHorizontal}
          data={getTimeData()}
          keyExtractor={(index) => index.toString()}
          renderItem={renderItem}
          numColumns={numCol}
        />
      </View>
    </View>
  );
}

export default memo(TimeSelector)

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
  listTimeContainer: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 8,
  },
});
