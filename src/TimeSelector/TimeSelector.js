import React, {useState, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Time from './Time';

export default function TimeSelector() {
  const [isHorizontal, setIsHorizontal] = useState(false);
  const numCols = !isHorizontal && 4;
  const [timeSelected, setTimeSelected] = useState('')
  const [indexActive, setIndexActive] = useState()

  const getTimeData = useMemo(() => {
    let timeArr = []
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 2; j++) {
        timeArr.push(i + ':' + (j === 0 ? '00' : 30 * j))
      }
    }
    return timeArr
  }, [])

  const handleChangeLayout = useCallback(() => {
    setIsHorizontal((prevState) => !prevState);
  }, []);

  const handleSelectedTime = (time, indexSelected) => {
    setTimeSelected(time)
    setIndexActive(indexSelected)
  }

  const renderItem = useCallback(
    ({item, index}) => (
      <Time
        key={index}
        time={item}
        index={index}
        handleSelectedTime={handleSelectedTime}
      />
    ),
    [],
  );

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
          key={numCols}
          horizontal={isHorizontal}
          data={getTimeData}
          keyExtractor={(index) => index.toString()}
          renderItem={renderItem}
          numColumns={numCols}
        />
      </View>

      <TouchableHighlight style={styles.confirmBtn}>
        <Text style={styles.doneText}>Done</Text>
      </TouchableHighlight>
    </View>
  );
}

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
  confirmBtn: {
    marginHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#FD662F',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 14,
  },
  doneText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
  },
});
