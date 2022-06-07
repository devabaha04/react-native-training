import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Guess() {
  return (
    <View style={styles.container} >
      <View>
      <Text>Guess </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  }
})
