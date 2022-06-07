import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Block() {
  return (
    <View style={styles.container} >
      <Text>A</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#3a3a3d'
  }
})
