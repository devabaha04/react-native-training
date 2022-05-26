import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import Fruits from './Fruits';

export default class ListFruits extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  renderItem(item) {
    return <Fruits fruit={item} />;
  } 

  render() {
    return (
      <ScrollView style={styles.container} >
        {this.props.fruits.map((item, index) => this.renderItem(item))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingHorizontal: 12,
    paddingVertical: 12
  }
})