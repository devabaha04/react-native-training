import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Fruits extends Component {

  // Kiểm soát render
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.fruit.name !== this.props.fruit.name ||
      nextProps.fruit.color !== this.props.fruit.color ||
      nextProps.fruit.imageUrl !== this.props.fruit.imageUrl
    ) {
      return true;
    }

    return false;
  }

  render() {
    const {name, color, imageUrl} = this.props.fruit;
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: color,
            opacity: this.props.keyboardStatus ? 0.6 : 1,
          },
        ]}>
        <Image source={{uri: imageUrl}} style={styles.imageFruit} />
        <Text style={styles.nameFruit}>{name}</Text>

        <TouchableOpacity onPress={this.props.handleDeleteFruit}>
          <Icon name="trash" size={30} color={'#fff'} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 3,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  imageFruit: {
    width: 90,
    height: 90,
    borderRadius: 16,
    resizeMode: 'cover',
  },
  nameFruit: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
});
