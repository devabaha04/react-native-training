import React, {useState, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Platform,
} from 'react-native';
import TimeSelector from './TimeSelector';
import {bannerLink} from './constant';
import {getPassedTime} from './helper/getTime';

export default function App() {
  const [isHorizontal, setIsHorizontal] = useState(false);
  const [timeData, setTimeData] = useState(getPassedTime());
  const [timeSelected, setTimeSelected] = useState('');
  const DateNow = new Date();

  const handleChangeLayout = useCallback(() => {
    setIsHorizontal((prevState) => !prevState);
  }, []);

  const handleSelectedTime = useCallback(
    (indexSelected) => {
      const timeDataNew = timeData.map((item, index) => {
        if (index === indexSelected) {
          setTimeSelected(item.time);
        }
        return {
          ...item,
          status: index === indexSelected ? 2 : item.status === 0 ? 0 : 1,
        };
      });
      setTimeData(timeDataNew);
    },
    [timeData],
  );

  const handleConfirmTime = useCallback(() => {
    alert(`${timeSelected} - ${DateNow.toDateString()} at Hanoi`);
  }, [timeSelected]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerContent}>Project Training 3</Text>
      </View>

      <View style={styles.bannerContainer}>
        <Image source={{uri: bannerLink}} style={styles.bannerImg} />
      </View>

      <View style={styles.selectBox}>
        <Text style={styles.cinemaLabel}>Location </Text>
        <Text style={styles.cinemaName}>Hanoi, Vietnam</Text>
      </View>

      <View style={[styles.selectBox, {flexDirection: 'row'}]}>
        <Text style={styles.calendarLabel}>Calendar: </Text>
        <Text style={styles.calendar}>{DateNow.toDateString()}</Text>
      </View>

      <TimeSelector
        isHorizontal={isHorizontal}
        col={4}
        onChangeLayout={handleChangeLayout}
        onSelectedTime={handleSelectedTime}
        timeData={timeData}
        timeSelected={timeSelected}
      />

      <TouchableHighlight
        disabled={!timeSelected}
        style={[
          styles.confirmBtn,
          {
            backgroundColor: !timeSelected ? '#bbb' : '#2C7AFF',
            marginBottom: Platform.OS === 'ios' ? 0 : 10,
          },
        ]}
        onPress={handleConfirmTime}>
        <Text
          style={[styles.doneText, {color: !timeSelected ? '#ccc' : '#fff'}]}>
          Done
        </Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E4F7',
  },
  headerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 12,
  },
  headerContent: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  bannerContainer: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImg: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  selectBox: {
    marginTop: 12,
    marginBottom: 8,
    padding: 14,
    backgroundColor: '#fff',
    shadowColor: '#CBD5E8',
    shadowOpacity: 14,
    shadowRadius: 12,
  },
  cinemaLabel: {
    fontSize: 18,
    fontWeight: '400',
    color: '#333',
    marginBottom: 8,
  },
  cinemaName: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600',
  },
  calendarLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
  },
  calendar: {
    color: 'red',
    fontSize: 16,
    fontWeight: '600',
  },
  confirmBtn: {
    marginHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 12,
  },
  doneText: {
    fontSize: 24,
    fontWeight: '500',
  },
});
