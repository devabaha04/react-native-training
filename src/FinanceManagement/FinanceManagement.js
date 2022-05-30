import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Login from './Login';
import Profile from './Profile';

class FinanceManagement extends Component {

  render() {
    return (
      <View style={styles.container} >
        {/* <Login /> */}
        <Profile />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F1F6FE',
  }
})

export default FinanceManagement;
