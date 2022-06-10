import React from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'

const widthWindow = Math.floor(Dimensions.get('window').width / 10 + 21)
const heightWindow = Math.floor(Dimensions.get('window').height / 22 + 22)

export default function Block({letter}) {
  return (
    <View style={styles.container} >
      <Text style={styles.contentBlock}>{letter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#d7dadc',
    width: widthWindow,
    height: heightWindow,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 6,
    overflow: 'hidden',
  },
  contentBlock: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    
  }
})
