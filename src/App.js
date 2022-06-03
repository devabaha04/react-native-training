import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import TimeSelector from './TimeSelector';
import { bannerLink } from './constant';

export default function App() {
  const DateNow = new Date()
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.headerContainer} >
        <Text style={styles.headerContent} >Project Training 3</Text>
        <Text style={styles.headerDescription} >Book calendar, watch movies the weekend</Text>
      </View>
      <View style={styles.bannerContainer} >
        <Image source={{uri:bannerLink}} style={styles.bannerImg} />
      </View>
      <View style={styles.selectBox} >
        <Text style={styles.cinemaLabel} >Location </Text>
        <Text style={styles.cinemaName}  >
            Hanoi, Vietnam
        </Text>
      </View>
      <View style={[styles.selectBox, { flexDirection: 'row' }]} >
        <Text style={styles.calendarLabel} >Calendar: </Text>
        <Text style={styles.calendar} >{DateNow.toDateString()}</Text>
      </View>
      <TimeSelector />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9E4F7'
  },
  headerContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 12,
  },
  headerContent: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333'
  },
  headerDescription: {
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 10,
    color: '#333'
  },
  bannerContainer: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImg: {
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },
  selectBox: {
    marginTop: 12,
    marginBottom: 8,
    padding: 14,
    backgroundColor: '#fff',
    shadowColor: '#CBD5E8',
    shadowOpacity: 14,
    shadowRadius: 12
  },
  cinemaLabel: {
    fontSize: 18,
    fontWeight: '400',
    color: '#333',
    marginBottom: 8
  },
  cinemaName: {
    fontSize: 16,
    color: '#333',
    fontWeight: '600'
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
  }
})
