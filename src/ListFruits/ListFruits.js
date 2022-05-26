import React, {Component} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Fruits from './Fruits';

export default class ListFruits extends Component {
  renderItem(item, index) {
    return (
      <Fruits
        fruit={item}
        key={index}
        keyboardStatus={this.props.keyboardStatus}
        handleDeleteFruit={() => this.props.handleDeleteFruit(index)}
      />
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.fruits.map((item, index) => this.renderItem(item, index))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
});
